// Development server with email API support
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Load environment variables manually (.env first, then .env.local overrides)
const envPath = path.join(__dirname, '.env');
const envLocalPath = path.join(__dirname, '.env.local');

// Load .env first
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

// Load .env.local second (overrides .env)
if (fs.existsSync(envLocalPath)) {
  const envLocalFile = fs.readFileSync(envLocalPath, 'utf8');
  envLocalFile.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API endpoint for sending invitations
app.post('/api/send-invitation', async (req, res) => {
  console.log('Received invitation request:', req.body);
  
  const { userEmail, userName, organizationName, temporaryPassword } = req.body;

  // Validate required fields
  if (!userEmail || !userName || !organizationName) {
    console.log('Missing required fields');
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get SMTP2GO credentials
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';

  console.log('🔧 SMTP2GO Config Debug:');
  console.log('  API Key:', SMTP2GO_API_KEY ? SMTP2GO_API_KEY.substring(0, 20) + '...' : 'MISSING');
  console.log('  Sender Email:', SMTP2GO_SENDER_EMAIL);
  console.log('  Sender Name:', SMTP2GO_SENDER_NAME);

  // Check if credentials exist
  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
    console.log('Missing SMTP2GO configuration');
    return res.status(500).json({ 
      error: 'Email service not configured',
      demo: true,
      message: `User created successfully! (Demo mode - invitation would be sent to ${userEmail})`
    });
  }

  try {
    // Create email content
    const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.rworldfeedback.com';
    const subject = `Welcome to ${organizationName} - Realworld Survey Platform`;
    
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .button { background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Realworld</h1>
          </div>
          <div class="content">
            <h2>Hello ${userName}!</h2>
            <p>You've been invited to join <strong>${organizationName}</strong>.</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            ${temporaryPassword ? `<p><strong>Password:</strong> ${temporaryPassword}</p>` : ''}
            <p><a href="${APP_URL}/login" class="button">Access Platform</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log('Sending email via SMTP2GO...');

    // Send email via SMTP2GO
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': SMTP2GO_API_KEY,
      },
      body: JSON.stringify({
        to: [userEmail],
        sender: `${SMTP2GO_SENDER_NAME} <${SMTP2GO_SENDER_EMAIL}>`,
        subject: subject,
        html_body: htmlBody,
      }),
    });

    const data = await response.json();
    console.log('SMTP2GO Response:', data);

    if (response.ok && data.data?.succeeded > 0) {
      return res.status(200).json({ 
        success: true, 
        message: `Invitation sent successfully to ${userEmail}!`
      });
    } else {
      console.error('SMTP2GO Error:', data);
      return res.status(200).json({ 
        success: true,
        demo: true,
        message: `User created! (Email service issue - invitation not sent to ${userEmail})`,
        details: data
      });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(200).json({ 
      success: true,
      demo: true,
      message: `User created! (Network issue - invitation not sent to ${userEmail})`,
      error: error.message
    });
  }
});

// Test configuration endpoint
app.get('/api/test-email-config', (req, res) => {
  const config = {
    apiKey: process.env.SMTP2GO_API_KEY ? '✅ Set' : '❌ Missing',
    senderEmail: process.env.SMTP2GO_SENDER_EMAIL ? '✅ Set' : '❌ Missing',
    senderName: process.env.SMTP2GO_SENDER_NAME || 'Default: Realworld',
    port: PORT,
    status: 'Server running'
  };

  res.json({
    message: 'Email Configuration Check',
    config: config
  });
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404s
app.use((req, res) => {
  if (req.url.startsWith('/api/')) {
    res.status(404).json({ error: `API endpoint ${req.url} not found` });
  } else {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
  }
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`
🚀 Development Server Running
📍 URL: http://localhost:${PORT}
📧 Email API: http://localhost:${PORT}/api/send-invitation
🔧 Config Test: http://localhost:${PORT}/api/test-email-config

Ready to test email functionality!
  `);
});

// Handle shutdown gracefully
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Keep process alive
setInterval(() => {
  console.log(`Server alive - ${new Date().toLocaleTimeString()}`);
}, 30000);