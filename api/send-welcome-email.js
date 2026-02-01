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
    const setupLink = `${BASE_URL}/setup?token=${setupToken}&user=${userId}`;

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
                subject: 'Welcome to Realworld - Complete Your Account Setup',
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
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f5f7; padding: 40px 0;">
            <tr>
                <td align="center">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">

                        <!-- Header with dark background matching the platform -->
                        <tr>
                            <td style="background-color: #1e293b; padding: 30px 40px; text-align: center;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">
                                    real<span style="color: #4ade80;">W</span>orld
                                </h1>
                                <p style="color: #94a3b8; margin: 5px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Employee Surveys</p>
                            </td>
                        </tr>

                        <!-- Main content -->
                        <tr>
                            <td style="padding: 40px;">
                                <h2 style="color: #1e293b; margin: 0 0 15px; font-size: 22px;">Welcome to Realworld!</h2>

                                <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
                                    Your account has been created with the email address <strong>${email}</strong>.
                                </p>

                                <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 25px;">
                                    To get started, please complete your account setup by choosing your access level and setting up your organisation.
                                </p>

                                <!-- CTA Button -->
                                <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 30px auto;">
                                    <tr>
                                        <td style="background-color: #4ade80; border-radius: 8px;">
                                            <a href="${setupLink}" target="_blank" style="display: inline-block; padding: 14px 40px; color: #1e293b; text-decoration: none; font-size: 16px; font-weight: 700;">
                                                Complete Account Setup
                                            </a>
                                        </td>
                                    </tr>
                                </table>

                                <p style="color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 25px 0 0;">
                                    If the button doesn't work, copy and paste this link into your browser:<br>
                                    <a href="${setupLink}" style="color: #7c3aed; word-break: break-all;">${setupLink}</a>
                                </p>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="background-color: #f8fafc; padding: 25px 40px; border-top: 1px solid #e2e8f0;">
                                <p style="color: #94a3b8; font-size: 12px; margin: 0; text-align: center;">
                                    &copy; 2026 Realworld Employee Surveys. All rights reserved.<br>
                                    This email was sent because an account was created with this email address.<br>
                                    If you didn't create this account, please ignore this email.
                                </p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
}

function generateWelcomeEmailText(email, setupLink) {
    return `Welcome to Realworld Employee Surveys!

Your account has been created with the email address ${email}.

To get started, please complete your account setup by visiting:
${setupLink}

Choose your access level and set up your organisation to start using the platform.

If you didn't create this account, please ignore this email.

© 2026 Realworld Employee Surveys`;
}
