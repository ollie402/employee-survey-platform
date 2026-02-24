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
  console.log('[notify-submission] Received request:', { chatId, chatName, submittedAt });

  if (!chatId || !chatName) {
    console.log('[notify-submission] Missing required fields');
    return res.status(400).json({ error: 'Missing required fields: chatId, chatName' });
  }

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME || 'Realworld';
  const BASE_URL = process.env.BASE_URL || 'https://rworldfeedback.co.uk';

  console.log('[notify-submission] Env check:', {
    hasSupabaseUrl: !!SUPABASE_URL,
    hasServiceRoleKey: !!SUPABASE_SERVICE_ROLE_KEY,
    hasSmtp2goKey: !!SMTP2GO_API_KEY,
    hasSenderEmail: !!SMTP2GO_SENDER_EMAIL
  });

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('[notify-submission] Missing Supabase configuration');
    return res.status(500).json({ error: 'Database service not configured' });
  }

  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER_EMAIL) {
    console.error('[notify-submission] Missing SMTP2GO configuration');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    // Step 1: Fetch the chat record
    const chatUrl = `${SUPABASE_URL}/rest/v1/listening_chats?id=eq.${chatId}&select=user_id,notification_frequency,last_digest_sent_at,name`;
    console.log('[notify-submission] Step 1: Fetching chat from:', chatUrl);

    const chatResponse = await fetch(chatUrl, {
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const chatResponseText = await chatResponse.text();
    console.log('[notify-submission] Step 1 response status:', chatResponse.status, 'body:', chatResponseText);

    let chats;
    try {
      chats = JSON.parse(chatResponseText);
    } catch (parseErr) {
      console.error('[notify-submission] Failed to parse chat response as JSON:', chatResponseText);
      return res.status(500).json({ error: 'Invalid response from database when fetching chat' });
    }

    if (!Array.isArray(chats) || chats.length === 0) {
      console.log('[notify-submission] Chat not found or error response:', chats);
      return res.status(404).json({ error: 'Chat not found', detail: chats });
    }
    const chat = chats[0];
    console.log('[notify-submission] Step 1 result - chat record:', JSON.stringify(chat));

    if (!chat.user_id) {
      console.log('[notify-submission] Chat has no user_id');
      return res.status(400).json({ error: 'Chat has no creator reference (user_id is null)' });
    }

    // Step 2: Look up the creator in the users table (user_id = auth user ID stored as auth_id)
    const userUrl = `${SUPABASE_URL}/rest/v1/users?auth_id=eq.${chat.user_id}&select=email,notification_frequency,first_name`;
    console.log('[notify-submission] Step 2: Looking up creator at:', userUrl);

    const userResponse = await fetch(userUrl, {
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const userResponseText = await userResponse.text();
    console.log('[notify-submission] Step 2 response status:', userResponse.status, 'body:', userResponseText);

    let users;
    try {
      users = JSON.parse(userResponseText);
    } catch (parseErr) {
      console.error('[notify-submission] Failed to parse user response as JSON:', userResponseText);
      return res.status(500).json({ error: 'Invalid response from database when fetching user' });
    }

    // If auth_id lookup returned no results, try falling back to Supabase auth.users email
    if (!Array.isArray(users) || users.length === 0) {
      console.log('[notify-submission] No user found via auth_id lookup. Trying auth.users fallback...');

      // Try to get the email directly from Supabase auth.users via the admin API
      const authUserUrl = `${SUPABASE_URL}/auth/v1/admin/users/${chat.user_id}`;
      console.log('[notify-submission] Fallback: Fetching auth user from:', authUserUrl);

      const authUserResponse = await fetch(authUserUrl, {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });

      const authUserText = await authUserResponse.text();
      console.log('[notify-submission] Fallback response status:', authUserResponse.status, 'body:', authUserText.substring(0, 500));

      let authUser;
      try {
        authUser = JSON.parse(authUserText);
      } catch (parseErr) {
        console.error('[notify-submission] Failed to parse auth user response');
        return res.status(404).json({ error: 'Chat creator not found in users table or auth system' });
      }

      if (authUser && authUser.email) {
        console.log('[notify-submission] Fallback succeeded - found email from auth.users:', authUser.email);
        users = [{ email: authUser.email, notification_frequency: null }];
      } else {
        console.error('[notify-submission] Fallback also failed - no email found');
        return res.status(404).json({ error: 'Chat creator not found in users table or auth system' });
      }
    }

    const creator = users[0];
    console.log('[notify-submission] Step 2 result - creator:', JSON.stringify({ email: creator.email, notification_frequency: creator.notification_frequency }));

    if (!creator.email) {
      console.log('[notify-submission] Creator has no email address');
      return res.status(400).json({ error: 'Creator has no email address' });
    }

    // Step 3: Determine effective notification frequency
    const effectiveFrequency = chat.notification_frequency || creator.notification_frequency || 'instant';
    console.log('[notify-submission] Step 3: Effective frequency:', effectiveFrequency,
      '(chat override:', chat.notification_frequency, '| user default:', creator.notification_frequency, ')');

    if (effectiveFrequency === 'never') {
      console.log('[notify-submission] Notifications disabled - skipping');
      return res.status(200).json({ success: true, action: 'skipped', reason: 'Notifications disabled' });
    }

    // Step 4: Handle based on frequency
    if (effectiveFrequency === 'instant') {
      console.log('[notify-submission] Step 4: Sending instant email to:', creator.email);
      const emailResult = await sendInstantEmail(creator.email, chatName, submittedAt, BASE_URL, SMTP2GO_API_KEY, SMTP2GO_SENDER_EMAIL, SMTP2GO_SENDER_NAME);
      console.log('[notify-submission] Email send result:', JSON.stringify(emailResult));
      return res.status(200).json({ success: true, action: 'sent_instant', emailResult });
    }

    // Daily or weekly digest
    const thresholdHours = effectiveFrequency === 'daily' ? 24 : 168;
    const lastSent = chat.last_digest_sent_at ? new Date(chat.last_digest_sent_at) : null;
    const now = new Date();
    const timeSinceLastMs = lastSent ? (now - lastSent) : null;
    const thresholdMs = thresholdHours * 60 * 60 * 1000;

    console.log('[notify-submission] Step 4: Digest check -', {
      frequency: effectiveFrequency,
      lastSent: lastSent ? lastSent.toISOString() : 'never',
      timeSinceLastMs,
      thresholdMs,
      isDue: !lastSent || timeSinceLastMs >= thresholdMs
    });

    if (!lastSent || timeSinceLastMs >= thresholdMs) {
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
      console.log('[notify-submission] Digest response count:', responseCount, 'content-range:', contentRange);

      // Send digest email
      const periodLabel = effectiveFrequency === 'daily' ? 'daily' : 'weekly';
      console.log('[notify-submission] Sending', periodLabel, 'digest to:', creator.email);
      const emailResult = await sendDigestEmail(creator.email, chatName, responseCount, periodLabel, BASE_URL, SMTP2GO_API_KEY, SMTP2GO_SENDER_EMAIL, SMTP2GO_SENDER_NAME);
      console.log('[notify-submission] Digest email result:', JSON.stringify(emailResult));

      // Update last_digest_sent_at
      const patchResponse = await fetch(
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
      console.log('[notify-submission] Updated last_digest_sent_at, status:', patchResponse.status);

      return res.status(200).json({ success: true, action: `sent_${periodLabel}_digest`, count: responseCount, emailResult });
    } else {
      const nextDue = new Date(lastSent.getTime() + thresholdMs).toISOString();
      console.log('[notify-submission] Digest not due yet. Next due:', nextDue);
      return res.status(200).json({ success: true, action: 'digest_not_due', nextDue });
    }

  } catch (error) {
    console.error('[notify-submission] Unhandled error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

// Send an instant notification email — returns result object
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

  const response = await fetch('https://api.smtp2go.com/v3/email/send', {
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

  const data = await response.json();
  console.log('[notify-submission] SMTP2GO instant response:', JSON.stringify(data));

  if (response.ok && data.data?.succeeded > 0) {
    return { success: true, messageId: data.data.email_id };
  } else {
    console.error('[notify-submission] SMTP2GO instant email failed:', data);
    return { success: false, error: data };
  }
}

// Send a digest notification email — returns result object
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

  const response = await fetch('https://api.smtp2go.com/v3/email/send', {
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

  const data = await response.json();
  console.log('[notify-submission] SMTP2GO digest response:', JSON.stringify(data));

  if (response.ok && data.data?.succeeded > 0) {
    return { success: true, messageId: data.data.email_id };
  } else {
    console.error('[notify-submission] SMTP2GO digest email failed:', data);
    return { success: false, error: data };
  }
}
