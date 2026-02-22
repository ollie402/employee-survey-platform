// Welcome email API endpoint for new account signups
// Sends branded welcome email with account setup link

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, userId, authId } = req.body;

    if (!email || !userId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
    const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
    const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld Employee Surveys';
    const BASE_URL = process.env.BASE_URL || 'https://rworldfeedback.co.uk';

    if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
        console.error('Missing SMTP2GO configuration');
        return res.status(500).json({ error: 'Email service not configured' });
    }

    // Generate setup token
    const setupToken = crypto.randomUUID();
    const setupLink = `${BASE_URL}/onboarding.html?email=${encodeURIComponent(email)}&token=${setupToken}`;

    try {
        // Send branded email
        const response = await fetch('https://api.smtp2go.com/v3/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Smtp2go-Api-Key': SMTP2GO_API_KEY,
            },
            body: JSON.stringify({
                to: [email],
                sender: `${SMTP2GO_SENDER_NAME} <${SMTP2GO_SENDER_EMAIL}>`,
                subject: 'Complete your Realworld setup',
                html_body: generateWelcomeEmailHTML(email, setupLink),
                text_body: generateWelcomeEmailText(email, setupLink),
            }),
        });

        const data = await response.json();

        if (response.ok && data.data?.succeeded > 0) {
            return res.status(200).json({
                success: true,
                message: 'Welcome email sent',
                messageId: data.data.email_id,
                setupToken: setupToken // Return token so it can be stored
            });
        } else {
            console.error('SMTP2GO Error:', data);
            return res.status(400).json({ error: 'Failed to send email', details: data.data?.failures });
        }
    } catch (error) {
        console.error('Welcome email error:', error);
        return res.status(500).json({ error: 'Internal server error', message: error.message });
    }
}

function generateWelcomeEmailHTML(email, setupLink) {
    return `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; background: #f4f5f7; padding: 40px 20px; margin: 0;">
  <div style="max-width: 480px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px;">
    <div style="margin-bottom: 28px;">
      <span style="background: linear-gradient(135deg, #6c47ff, #9b7fff); color: white; font-weight: 700; font-size: 18px; padding: 8px 16px; border-radius: 8px; display: inline-block;">R</span>
      <span style="font-weight: 700; font-size: 18px; margin-left: 10px;">Realworld</span>
    </div>
    <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 12px;">Welcome to Realworld!</h1>
    <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 28px;">
      Your account has been created. Click the button below to choose your plan and complete your setup.
    </p>
    <a href="${setupLink}" style="display: inline-block; background: #6c47ff; color: white; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none;">
      Complete Setup
    </a>
    <p style="color: #94a3b8; font-size: 13px; margin-top: 24px; line-height: 1.6;">
      If the button doesn't work, copy and paste this link into your browser:<br>
      <a href="${setupLink}" style="color: #7c3aed; word-break: break-all;">${setupLink}</a>
    </p>
    <p style="color: #94a3b8; font-size: 13px; margin-top: 24px;">
      If you didn't create this account, you can safely ignore this email.
    </p>
  </div>
</body>
</html>`;
}

function generateWelcomeEmailText(email, setupLink) {
    return `Welcome to Realworld!

Your account has been created. Visit the link below to choose your plan and complete your setup:

${setupLink}

If you didn't create this account, you can safely ignore this email.

© 2026 Realworld Employee Surveys`;
}
