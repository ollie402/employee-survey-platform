// This file handles sending chat session invitations to participants
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get invitation details from the request
  const { email, name, sessionName, personalLink } = req.body;

  // Check if we have all required information
  if (!email || !name || !sessionName || !personalLink) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get credentials from environment variables
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';
  
  // Check if credentials exist
  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
    console.error('Missing SMTP2GO configuration');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Create the email subject line
  const subject = `Join Chat Session: ${sessionName}`;
  
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
        .session-info { 
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
          <h1>You're Invited!</h1>
        </div>
        <div class="content">
          <h2>Hello ${name}!</h2>
          <p>You've been invited to participate in a chat session.</p>
          
          <div class="session-info">
            <h3>Session Details:</h3>
            <p><strong>Session Name:</strong> ${sessionName}</p>
            <p><strong>Your Personal Link:</strong></p>
            <p style="word-break: break-all; font-family: monospace; background: #e9ecef; padding: 10px; border-radius: 4px;">${personalLink}</p>
          </div>
          
          <div style="text-align: center;">
            <a href="${personalLink}" class="button">Join Session</a>
          </div>
          
          <p>Click the button above or copy and paste the personal link into your browser to join the session.</p>
          <p>If you have any questions, please contact the session organizer.</p>
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
        to: [email],
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
        message: 'Chat invitation sent successfully' 
      });
    } else {
      console.error('SMTP2GO Error:', data);
      return res.status(400).json({ 
        error: 'Failed to send chat invitation', 
        details: data 
      });
    }
  } catch (error) {
    console.error('Error sending chat invitation:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}