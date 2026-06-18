import Anthropic from '@anthropic-ai/sdk';

// Autocomplete-style AI question suggestions for the survey builder.
// Given what the user is typing plus their previously-used questions,
// predicts a few complete survey questions — like search-bar suggestions.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { input = '', previousQuestions = [] } = req.body || {};
  if (!input || !input.trim()) return res.status(200).json({ suggestions: [] });

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const prevList = (Array.isArray(previousQuestions) ? previousQuestions.slice(0, 40) : [])
      .filter(q => typeof q === 'string' && q.trim())
      .map(q => `- ${q.trim()}`)
      .join('\n');

    const prompt = `You are an autocomplete assistant for an employee-survey question builder. The user is typing a survey question. Predict 3-5 complete, well-phrased survey questions that plausibly complete or match what they are typing — like Google search suggestions.

What the user has typed so far:
"${input}"

${prevList ? `Questions they have used before (match their style and topics where relevant):\n${prevList}\n` : ''}Rules:
- Each suggestion must be a complete survey question a participant could answer.
- The opening words should stay consistent with what the user has typed.
- Keep them concise and professional.
- Do not repeat the user's input verbatim; complete or refine it.
- Return ONLY a raw JSON array of strings, no markdown, no code fences:
["question 1", "question 2", "question 3"]`;

    const message = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }]
    });

    const raw = (message.content[0] && message.content[0].text) || '[]';
    let suggestions;
    try {
      suggestions = JSON.parse(raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim());
    } catch (e) {
      suggestions = [];
    }
    if (!Array.isArray(suggestions)) suggestions = [];
    suggestions = suggestions.filter(s => typeof s === 'string' && s.trim()).slice(0, 5);

    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Suggest questions error:', error);
    res.status(500).json({ error: error.message });
  }
}
