// This file handles sending invitation emails to new users
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get user details from the request
  const { userEmail, userName, organizationName, temporaryPassword } = req.body;

  // Check if we have all required information
  if (!userEmail || !userName || !organizationName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get credentials from environment variables
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';
  
  // FIX: Use your public website URL instead of VERCEL_URL
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.rworldfeedback.com';

  // Create the email subject line
  const subject = `Welcome to ${organizationName} - Realworld Survey Platform`;
  
  // Create the email content (HTML formatted)
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          font-family: 'Segoe UI', Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
        }
        .email-container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: #ffffff; 
        }
        .header { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
          padding: 30px; 
          text-align: center; 
        }
        .header h1 { 
          color: white; 
          margin: 0; 
          font-size: 28px; 
        }
        .content { 
          padding: 40px 30px; 
        }
        .button { 
          display: inline-block; 
          padding: 14px 30px; 
          background: #2563eb; 
          color: white; 
          text-decoration: none; 
          border-radius: 6px; 
          margin: 20px 0; 
        }
        .credentials { 
          background: #f8f9fa; 
          padding: 20px; 
          border-radius: 8px; 
          margin: 20px 0; 
        }
        .footer { 
          background: #f8f9fa; 
          padding: 20px; 
          text-align: center; 
          color: #666; 
          font-size: 14px; 
        }
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
    // Send the email using SMTP2GO
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': SMTP2GO_API_KEY,
      },
      body: JSON.stringify({
        api_key: SMTP2GO_API_KEY,
        to: [userEmail],
        sender: `${SMTP2GO_SENDER_NAME} <${SMTP2GO_SENDER_EMAIL}>`,
        subject: subject,
        html_body: htmlBody,
      }),
    });

    const data = await response.json();

    // Check if email was sent successfully
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
}