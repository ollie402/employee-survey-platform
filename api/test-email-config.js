// Test endpoint to check if email configuration is working
export default async function handler(req, res) {
  // Check environment variables
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  const SMTP2GO_SENDER_EMAIL = process.env.SMTP2GO_SENDER_EMAIL;
  const SMTP2GO_SENDER_NAME = process.env.SMTP2GO_SENDER_NAME;

  const status = {
    apiKey: SMTP2GO_API_KEY ? '✅ Set' : '❌ Missing',
    senderEmail: SMTP2GO_SENDER_EMAIL ? '✅ Set' : '❌ Missing',
    senderName: SMTP2GO_SENDER_NAME || 'Using default: Realworld',
    configured: !!(SMTP2GO_API_KEY && SMTP2GO_SENDER_EMAIL)
  };

  if (status.configured) {
    // Test API connection (without actually sending email)
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

  return res.status(200).json({
    message: 'SMTP2GO Email Service Configuration Check',
    status: status,
    instructions: status.configured ? 
      'Configuration looks good! Try sending a test email.' : 
      'Please set up your SMTP2GO credentials in the .env file'
  });
}