// Simple development server with API support
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Test endpoint
app.get('/api/test-email-config', async (req, res) => {
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME;

  const status = {
    apiKey: SMTP2GO_API_KEY ? '✅ Set' : '❌ Missing',
    senderEmail: SMTP2GO_SENDER_EMAIL ? '✅ Set' : '❌ Missing',
    senderName: SMTP2GO_SENDER_NAME || 'Using default: Realworld',
    configured: !!(SMTP2GO_API_KEY && SMTP2GO_SENDER_EMAIL)
  };

  // Test connection
  if (status.configured) {
    try {
      const response = await fetch('https://api.smtp2go.com/v3/stats', {
        method: 'GET',
        headers: {
          'X-Smtp2go-Api-Key': SMTP2GO_API_KEY,
        },
      });
      
      if (response.ok) {
        status.connection = '✅ API connection successful';
      } else {
        status.connection = '❌ API connection failed - check your API key';
      }
    } catch (error) {
      status.connection = '❌ Network error: ' + error.message;
    }
  } else {
    status.connection = '⏹️ Skipped - missing credentials';
  }

  res.json({
    message: 'SMTP2GO Email Service Configuration Check',
    status: status,
    instructions: status.configured ? 
      'Configuration looks good! Try sending a test email.' : 
      'Please set up your SMTP2GO credentials in the .env file'
  });
});

// Send invitation endpoint
app.post('/api/send-invitation', async (req, res) => {
  const { userEmail, userName, organizationName, temporaryPassword } = req.body;

  if (!userEmail || !userName || !organizationName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';
  
  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
    console.error('Missing SMTP2GO configuration');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.rworldfeedback.com';
  const subject = `Welcome to ${organizationName} - Realworld Survey Platform`;
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .content { padding: 40px 30px; }
        .button { display: inline-block; padding: 14px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .credentials { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Welcome to Realworld</h1>
        </div>
        <div class="content">
          <h2>Hello ${userName}!</h2>
          <p>You've been invited to join <strong>${organizationName}</strong> on the Realworld Employee Survey Platform.</p>
          
          <div class="credentials">
            <h3>Your Login Credentials:</h3>
            <p><strong>Email:</strong> ${userEmail}</p>
            ${temporaryPassword ? `<p><strong>Temporary Password:</strong> ${temporaryPassword}</p>` : ''}
            <p><em>Please change your password after your first login.</em></p>
          </div>
          
          <div style="text-align: center;">
            <a href="${APP_URL}/login" class="button">Access Platform</a>
          </div>
          
          <p>If you have any questions, please contact your administrator.</p>
        </div>
        <div class="footer">
          <p>This is an automated message from Realworld Survey Platform.</p>
          <p>© 2024 Realworld. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
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

    if (response.ok && data.data?.succeeded > 0) {
      return res.status(200).json({ 
        success: true, 
        message: 'Invitation sent successfully' 
      });
    } else {
      return res.status(400).json({ 
        error: 'Failed to send invitation', 
        details: data 
      });
    }
  } catch (error) {
    console.error('Error sending invitation:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📧 Email API endpoints:`);
  console.log(`   • http://localhost:${PORT}/api/test-email-config`);
  console.log(`   • http://localhost:${PORT}/api/send-invitation`);
  console.log('\n💡 Ready to test email functionality!');
});

// Keep server running
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => {
    process.exit(0);
  });
});