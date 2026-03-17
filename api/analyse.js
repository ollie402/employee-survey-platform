import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { responses } = req.body;
  if (!responses || !responses.length) return res.status(400).json({ error: 'No responses provided' });

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const responseText = responses.map((r, i) => `Response ${i + 1}: ${r.message}`).join('\n');

    const message = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are analysing employee feedback responses. Analyse the following responses and return a JSON object only (no other text) with this structure:
{
  "overall_sentiment": "positive" | "neutral" | "negative",
  "sentiment_score": 0.0-1.0,
  "summary": "2-3 sentence summary of the overall feedback",
  "key_themes": ["theme1", "theme2", "theme3"],
  "response_count": number
}

Responses to analyse:
${responseText}`
        }
      ]
    });

    const raw = message.content[0].text;
    const parsed = JSON.parse(raw);
    res.status(200).json(parsed);

  } catch (error) {
    console.error('Claude API error:', error);
    res.status(500).json({ error: error.message });
  }
}
