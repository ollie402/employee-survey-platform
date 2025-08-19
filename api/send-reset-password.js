// This file handles sending password reset emails
import crypto from 'crypto';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the email address from the request
  const { email } = req.body;

  // Make sure email was provided
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Get credentials from environment variables
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';
  
  // FIX: Use your public website URL instead of VERCEL_URL
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.rworldfeedback.com';

  // Generate a random reset token (like a temporary password)
  const resetToken = crypto.randomBytes(32).toString('hex');
  
  // Create the reset link
  const resetLink = `${APP_URL}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;

  // Create the email subject
  const subject = 'Reset Your Password - Realworld Survey Platform';
  
  // Create the email content
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
        .warning { 
          background: #fff3cd; 
          border-left: 4px solid #ffc107; 
          padding: 15px; 
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
          <h1>Password Reset Request</h1>
        </div>
        <div class="content">
          <h2>Reset Your Password</h2>
          <p>We received a request to reset your password for your Realworld account associated with ${email}.</p>
          
          <div style="text-align: center;">
            <a href="${resetLink}" class="button">Reset Password</a>
          </div>
          
          <div class="warning">
            <strong>Important:</strong> This link will expire in 1 hour for security reasons.
          </div>
          
          <p>If you didn't request this password reset, please ignore this email. Your password won't be changed.</p>
          
          <p style="color: #666; font-size: 14px;">
            Or copy and paste this link into your browser:<br>
            <span style="word-break: break-all;">${resetLink}</span>
          </p>
        </div>
        <div class="footer">
          <p>This is an automated security message from Realworld Survey Platform.</p>
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
        message: 'Password reset email sent successfully',
        // Note: In a real app, save the token to database
        // Don't send the token back to the frontend
      });
    } else {
      return res.status(400).json({ 
        error: 'Failed to send reset email', 
        details: data 
      });
    }
  } catch (error) {
    console.error('Error sending reset email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}