// Real-time chat session management API
// Handles dynamic conversation flow and AI-powered prompting
export default async function handler(req, res) {
  // Enable CORS for all domains
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // GET: Fetch chat session details and conversation flow
    if (req.method === 'GET') {
      const { sessionId, step = '0' } = req.query;

      if (!sessionId) {
        return res.status(400).json({ error: 'Session ID required' });
      }

      // Get conversation flow based on current step
      const conversationFlow = getConversationFlow(sessionId, parseInt(step));

      return res.status(200).json({
        success: true,
        sessionId,
        currentStep: parseInt(step),
        conversation: conversationFlow
      });
    }

    // POST: Process user response and get next conversation step
    if (req.method === 'POST') {
      const { sessionId, step, userResponse, participantId } = req.body;

      if (!sessionId || step === undefined) {
        return res.status(400).json({ error: 'Session ID and step required' });
      }

      // Process the user's response
      const processedResponse = await processUserResponse({
        sessionId,
        step: parseInt(step),
        userResponse,
        participantId
      });

      // Get next conversation step
      const nextStep = getNextConversationStep(sessionId, parseInt(step), userResponse);

      return res.status(200).json({
        success: true,
        sessionId,
        currentStep: parseInt(step),
        nextStep: nextStep.step,
        botResponse: nextStep.botResponse,
        isComplete: nextStep.isComplete || false,
        processed: processedResponse
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Chat session error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}

// Define conversation flows based on session type
function getConversationFlow(sessionId, step) {
  // Default conversation flow for employee feedback
  const defaultFlow = {
    0: {
      botMessage: "Hello! 👋 Welcome to our feedback session. I'm here to listen to your thoughts and experiences. To get started, could you tell me a bit about your role in the organization?",
      placeholder: "e.g., Software Developer, Marketing Manager, etc.",
      type: "text"
    },
    1: {
      botMessage: "Thanks for sharing! How long have you been in this role?",
      placeholder: "e.g., 2 years, 6 months, etc.",
      type: "text"
    },
    2: {
      botMessage: "Great! On a scale of 1-10, how would you rate your overall job satisfaction?",
      placeholder: "Choose a number from 1 (very dissatisfied) to 10 (very satisfied)",
      type: "rating",
      min: 1,
      max: 10
    }
  };

  return defaultFlow[step] || {
    botMessage: "Thank you for your feedback! Is there anything else you'd like to share?",
    placeholder: "Any additional thoughts or comments...",
    type: "text"
  };
}

// Process user response and determine next step
function getNextConversationStep(sessionId, currentStep, userResponse) {
  const nextStep = currentStep + 1;

  // Customize bot responses based on previous answers
  switch (currentStep) {
    case 0: // After role question
      return {
        step: nextStep,
        botResponse: `Interesting! As a ${userResponse}, you must have unique insights. How long have you been in this role?`,
        isComplete: false
      };

    case 1: // After experience question
      return {
        step: nextStep,
        botResponse: `${userResponse} of experience gives you great perspective! Now, on a scale of 1-10, how would you rate your overall job satisfaction?`,
        isComplete: false
      };

    case 2: // After satisfaction rating
      const rating = parseInt(userResponse);
      let responseText = "";

      if (rating >= 8) {
        responseText = "That's wonderful to hear! What aspects of your job contribute most to this high satisfaction?";
      } else if (rating >= 6) {
        responseText = "Thanks for the honest feedback. What are some areas where you feel improvements could be made?";
      } else {
        responseText = "I appreciate your honesty. What are the main challenges you're facing that affect your job satisfaction?";
      }

      return {
        step: nextStep,
        botResponse: responseText,
        isComplete: false
      };

    case 3: // After detailed feedback
      return {
        step: nextStep,
        botResponse: "Thank you for those insights! One final question: What's one thing that would make the biggest positive impact on your work experience?",
        isComplete: false
      };

    case 4: // Final step
      return {
        step: nextStep,
        botResponse: "Thank you so much for taking the time to share your thoughts! Your feedback is invaluable and will help us create a better workplace. Have a great day! 🌟",
        isComplete: true
      };

    default:
      return {
        step: nextStep,
        botResponse: "Thank you for your feedback! Your responses have been recorded. Is there anything else you'd like to add?",
        isComplete: true
      };
  }
}

// Process and store user response
async function processUserResponse({ sessionId, step, userResponse, participantId }) {
  // Here we would normally save to database
  // For now, we'll return a processed confirmation

  const timestamp = new Date().toISOString();

  // Simulate processing the response
  const processedData = {
    sessionId,
    step,
    userResponse,
    participantId: participantId || 'anonymous',
    timestamp,
    processed: true
  };

  console.log('Processing chat response:', processedData);

  // In a real implementation, you would save this to Supabase or your database
  // await supabaseClient.from('chat_responses').insert(processedData);

  return processedData;
}