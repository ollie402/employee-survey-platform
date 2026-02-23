// This file handles sending notification emails to chat creators when a participant submits a response
export default async function handler(req, res) {
  // CORS headers for cross-origin calls
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { chatId, chatName, submittedAt } = req.body;

  if (!chatId || !chatName) {
    return res.status(400).json({ error: 'Missing required fields: chatId, chatName' });
  }

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';
  const BASE_URL = process.env.BASE_URL || 'https://rworldfeedback.co.uk';

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase configuration');
    return res.status(500).json({ error: 'Database service not configured' });
  }

  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
    console.error('Missing SMTP2GO configuration');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    // Step 1: Fetch the chat record
    const chatResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/listening_chats?id=eq.${chatId}&select=user_id,notification_frequency,last_digest_sent_at,name`,
      {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const chats = await chatResponse.json();
    if (!chats || chats.length === 0) {
      return res.status(404).json({ error: 'Chat not found' });
    }
    const chat = chats[0];

    if (!chat.user_id) {
      return res.status(400).json({ error: 'Chat has no creator reference' });
    }

    // Step 2: Look up the creator in the users table (user_id = auth user ID)
    const userResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/users?auth_id=eq.${chat.user_id}&select=email,notification_frequency`,
      {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const users = await userResponse.json();
    if (!users || users.length === 0) {
      return res.status(404).json({ error: 'Chat creator not found in users table' });
    }
    const creator = users[0];

    if (!creator.email) {
      return res.status(400).json({ error: 'Creator has no email address' });
    }

    // Step 3: Determine effective notification frequency
    // Per-chat override takes priority; if null, use user's global default
    const effectiveFrequency = chat.notification_frequency || creator.notification_frequency || 'instant';

    if (effectiveFrequency === 'never') {
      return res.status(200).json({ success: true, action: 'skipped', reason: 'Notifications disabled' });
    }

    // Step 4: Handle based on frequency
    if (effectiveFrequency === 'instant') {
      await sendInstantEmail(creator.email, chatName, submittedAt, BASE_URL, SMTP2GO_API_KEY, SMTP2GO_SENDER_EMAIL, SMTP2GO_SENDER_NAME);
      return res.status(200).json({ success: true, action: 'sent_instant' });
    }

    // Daily or weekly digest
    const thresholdHours = effectiveFrequency === 'daily' ? 24 : 168;
    const lastSent = chat.last_digest_sent_at ? new Date(chat.last_digest_sent_at) : null;
    const now = new Date();

    if (!lastSent || (now - lastSent) >= thresholdHours * 60 * 60 * 1000) {
      // Count responses since last digest
      let countUrl = `${SUPABASE_URL}/rest/v1/chat_responses?chat_id=eq.${chatId}&select=id`;
      if (lastSent) {
        countUrl += `&submitted_at=gte.${lastSent.toISOString()}`;
      }

      const countResponse = await fetch(countUrl, {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'count=exact',
          'Range-Unit': 'items',
          'Range': '0-0'
        }
      });

      const contentRange = countResponse.headers.get('content-range');
      let responseCount = 1;
      if (contentRange) {
        const total = contentRange.split('/')[1];
        if (total && total !== '*') {
          responseCount = parseInt(total, 10) || 1;
        }
      }

      // Send digest email
      const periodLabel = effectiveFrequency === 'daily' ? 'daily' : 'weekly';
      await sendDigestEmail(creator.email, chatName, responseCount, periodLabel, BASE_URL, SMTP2GO_API_KEY, SMTP2GO_SENDER_EMAIL, SMTP2GO_SENDER_NAME);

      // Update last_digest_sent_at
      await fetch(
        `${SUPABASE_URL}/rest/v1/listening_chats?id=eq.${chatId}`,
        {
          method: 'PATCH',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ last_digest_sent_at: now.toISOString() })
        }
      );

      return res.status(200).json({ success: true, action: `sent_${periodLabel}_digest`, count: responseCount });
    } else {
      return res.status(200).json({
        success: true,
        action: 'digest_not_due',
        nextDue: new Date(lastSent.getTime() + thresholdHours * 3600000).toISOString()
      });
    }

  } catch (error) {
    console.error('Notification error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

// Send an instant notification email
async function sendInstantEmail(email, chatName, submittedAt, baseUrl, apiKey, senderEmail, senderName) {
  const date = new Date(submittedAt || Date.now());
  const formattedDate = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
    + ' at ' + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f4f5f7;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">New Response Received</h1>
    </div>
    <div style="padding: 40px 30px;">
      <p style="color: #1f2937; font-size: 15px; line-height: 1.6;">
        Someone has submitted a new response to your chat.
      </p>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 8px 0;"><strong>Chat:</strong> ${chatName}</p>
        <p style="margin: 0;"><strong>Submitted:</strong> ${formattedDate}</p>
      </div>
      <div style="text-align: center; margin: 24px 0;">
        <a href="${baseUrl}" style="display: inline-block; padding: 14px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">View Responses</a>
      </div>
    </div>
    <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px;">
      <p style="margin: 0;">This is an automated notification from Realworld.</p>
      <p style="margin: 4px 0 0 0;">&copy; 2024 Realworld. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;

  await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Smtp2go-Api-Key': apiKey,
    },
    body: JSON.stringify({
      to: [email],
      sender: `${senderName} <${senderEmail}>`,
      subject: `New response received \u2014 ${chatName}`,
      html_body: htmlBody,
    }),
  });
}

// Send a digest notification email
async function sendDigestEmail(email, chatName, count, periodLabel, baseUrl, apiKey, senderEmail, senderName) {
  const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f4f5f7;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Your ${periodLabel} chat summary</h1>
    </div>
    <div style="padding: 40px 30px;">
      <p style="color: #1f2937; font-size: 15px; line-height: 1.6;">
        Here is your ${periodLabel} summary for <strong>${chatName}</strong>.
      </p>
      <div style="background: #f8f9fa; padding: 24px; border-radius: 8px; margin: 20px 0; text-align: center;">
        <p style="font-size: 36px; font-weight: 700; color: #667eea; margin: 0 0 4px 0;">${count}</p>
        <p style="color: #64748b; margin: 0; font-size: 14px;">new response${count !== 1 ? 's' : ''} received</p>
      </div>
      <div style="text-align: center; margin: 24px 0;">
        <a href="${baseUrl}" style="display: inline-block; padding: 14px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">View All Responses</a>
      </div>
    </div>
    <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px;">
      <p style="margin: 0;">This is an automated ${periodLabel} digest from Realworld.</p>
      <p style="margin: 4px 0 0 0;">&copy; 2024 Realworld. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;

  await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Smtp2go-Api-Key': apiKey,
    },
    body: JSON.stringify({
      to: [email],
      sender: `${senderName} <${senderEmail}>`,
      subject: `Your ${periodLabel} chat summary \u2014 ${chatName}`,
      html_body: htmlBody,
    }),
  });
}
