// Real-time chat response processing API
// Handles saving responses and triggering follow-up actions
export default async function handler(req, res) {
  // Enable CORS for all domains
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      sessionId,
      participantId,
      step,
      question,
      response,
      responseType,
      timestamp,
      metadata
    } = req.body;

    // Validate required fields
    if (!sessionId || !response || step === undefined) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['sessionId', 'response', 'step']
      });
    }

    // Process and enrich the response data
    const processedResponse = {
      sessionId,
      participantId: participantId || generateAnonymousId(),
      step: parseInt(step),
      question: question || '',
      response: response.trim(),
      responseType: responseType || 'text',
      timestamp: timestamp || new Date().toISOString(),
      processed_at: new Date().toISOString(),
      metadata: {
        userAgent: req.headers['user-agent'] || '',
        ip: req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '',
        ...metadata
      }
    };

    // Add response analysis
    const analysis = analyzeResponse(processedResponse);
    processedResponse.analysis = analysis;

    // Save to database (placeholder - would integrate with Supabase)
    const saveResult = await saveResponseToDatabase(processedResponse);

    // Generate contextual follow-up
    const followUp = generateFollowUp(processedResponse, analysis);

    return res.status(200).json({
      success: true,
      responseId: saveResult.id,
      processed: processedResponse,
      analysis,
      followUp,
      message: 'Response processed successfully'
    });

  } catch (error) {
    console.error('Chat response processing error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}

// Generate anonymous participant ID
function generateAnonymousId() {
  return 'anon_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

// Analyze response for sentiment and insights
function analyzeResponse(responseData) {
  const { response, step, responseType } = responseData;

  const analysis = {
    sentiment: 'neutral',
    keywords: [],
    length: response.length,
    wordCount: response.split(/\s+/).length,
    confidence: 0.8
  };

  // Simple sentiment analysis
  const positiveWords = ['good', 'great', 'excellent', 'love', 'amazing', 'wonderful', 'fantastic', 'satisfied', 'happy', 'pleased'];
  const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'horrible', 'disappointed', 'frustrated', 'angry', 'dissatisfied', 'poor'];

  const lowerResponse = response.toLowerCase();
  const positiveCount = positiveWords.filter(word => lowerResponse.includes(word)).length;
  const negativeCount = negativeWords.filter(word => lowerResponse.includes(word)).length;

  if (positiveCount > negativeCount) {
    analysis.sentiment = 'positive';
    analysis.confidence = Math.min(0.95, 0.6 + (positiveCount * 0.1));
  } else if (negativeCount > positiveCount) {
    analysis.sentiment = 'negative';
    analysis.confidence = Math.min(0.95, 0.6 + (negativeCount * 0.1));
  }

  // Extract keywords (simple implementation)
  const words = response.toLowerCase().match(/\b\w{4,}\b/g) || [];
  analysis.keywords = [...new Set(words)].slice(0, 5);

  // Add specific analysis based on step
  if (responseType === 'rating') {
    const rating = parseInt(response);
    if (!isNaN(rating)) {
      analysis.numericValue = rating;
      if (rating >= 8) analysis.sentiment = 'positive';
      else if (rating <= 4) analysis.sentiment = 'negative';
      else analysis.sentiment = 'neutral';
    }
  }

  return analysis;
}

// Generate contextual follow-up questions or responses
function generateFollowUp(responseData, analysis) {
  const { step, response, responseType } = responseData;
  const { sentiment, numericValue } = analysis;

  // Default follow-ups based on sentiment and step
  const followUps = {
    positive: [
      "That's great to hear! Could you tell me more about what makes this so positive?",
      "Wonderful! What specific aspects contribute to this positive experience?",
      "Excellent! Can you share what works particularly well?"
    ],
    negative: [
      "I understand this is challenging. What would help improve this situation?",
      "Thank you for sharing. What changes would make the biggest difference?",
      "I appreciate your honesty. What support would be most helpful?"
    ],
    neutral: [
      "Thank you for sharing. Could you elaborate on your experience?",
      "I'd like to understand more. What are your main thoughts on this?",
      "Can you tell me more about your perspective on this?"
    ]
  };

  // Step-specific follow-ups
  const stepSpecificFollowUps = {
    2: { // After rating question
      high: "What aspects of your role contribute most to this satisfaction?",
      medium: "What would help improve your satisfaction level?",
      low: "What are the main challenges affecting your satisfaction?"
    }
  };

  let followUpText = '';

  // Use step-specific follow-up if available
  if (stepSpecificFollowUps[step] && responseType === 'rating' && numericValue) {
    if (numericValue >= 8) followUpText = stepSpecificFollowUps[step].high;
    else if (numericValue >= 6) followUpText = stepSpecificFollowUps[step].medium;
    else followUpText = stepSpecificFollowUps[step].low;
  } else {
    // Use sentiment-based follow-up
    const options = followUps[sentiment] || followUps.neutral;
    followUpText = options[Math.floor(Math.random() * options.length)];
  }

  return {
    text: followUpText,
    type: 'follow_up',
    basedOn: sentiment,
    confidence: analysis.confidence
  };
}

// Save response to database (placeholder implementation)
async function saveResponseToDatabase(responseData) {
  // In a real implementation, this would save to Supabase
  console.log('Saving chat response to database:', responseData);

  // Simulate database save
  const result = {
    id: `resp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...responseData,
    saved_at: new Date().toISOString()
  };

  // Here you would actually save to your database:
  /*
  const { data, error } = await supabaseClient
    .from('chat_responses')
    .insert(responseData)
    .select()
    .single();

  if (error) throw error;
  return data;
  */

  return result;
}