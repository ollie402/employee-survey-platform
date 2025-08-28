// This file handles sending general emails
// It runs on Vercel's server, not in the user's browser

export default async function handler(req, res) {
  // Check if this is a POST request (sending data)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the email details from the request
  const { to, subject, htmlBody, textBody } = req.body;

  // Make sure we have the required information
  if (!to || !subject || (!htmlBody && !textBody)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get your secret credentials from environment variables
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';

  // Check if credentials exist
  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
    console.error('Missing SMTP2GO configuration');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    // Send the email using SMTP2GO's API - FIXED: Removed api_key from body
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': SMTP2GO_API_KEY,
      },
      body: JSON.stringify({
        to: Array.isArray(to) ? to : [to],
        sender: `${SMTP2GO_SENDER_NAME} <${SMTP2GO_SENDER_EMAIL}>`,
        subject: subject,
        html_body: htmlBody || convertTextToHTML(textBody),
        text_body: textBody || removeHTMLTags(htmlBody),
      }),
    });

    const data = await response.json();

    // Check if email was sent successfully
    if (response.ok && data.data?.succeeded > 0) {
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully',
        messageId: data.data.email_id 
      });
    } else {
      console.error('SMTP2GO Error:', data);
      return res.status(400).json({ 
        error: 'Failed to send email', 
        details: data.data?.failures 
      });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
}

// Helper function: Convert plain text to HTML
function convertTextToHTML(text) {
  if (!text) return '';
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          ${text.replace(/\n/g, '<br>')}
        </div>
      </body>
    </html>
  `;
}

// Helper function: Remove HTML tags from text
function removeHTMLTags(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}