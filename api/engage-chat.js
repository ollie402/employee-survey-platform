import Anthropic from '@anthropic-ai/sdk';

// Conversational "Engage" interview engine.
// Given the configured topics and the conversation so far, returns the AI's
// next message and whether the interview is complete.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    topics = [],
    goal = '',
    intro = '',
    history = [],
    maxExchanges = 5
  } = req.body || {};

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const topicList = (Array.isArray(topics) && topics.length)
      ? topics.join(', ')
      : 'their general experience at work';

    // Anthropic requires the first message to be from the user. Our transcript
    // may open with the configured intro (an assistant message) — peel it off
    // and give the model that context via the system prompt instead.
    let msgs = Array.isArray(history) ? history.slice() : [];
    let opener = intro || '';
    if (msgs.length && msgs[0].role === 'assistant') {
      opener = opener || msgs[0].content;
      msgs = msgs.slice(1);
    }

    const userTurns = msgs.filter(m => m.role === 'user').length;

    const systemPrompt = `You are a warm, professional interviewer running a short, anonymous two-way conversation as part of an employee feedback survey.

Goal: ${goal || "understand the participant's honest views"}.
Topics to cover conversationally: ${topicList}.
${opener ? `You already greeted the participant with: "${opener}"` : ''}

Guidelines:
- Ask ONE question at a time. Keep each message short (1-3 sentences), warm and natural.
- Genuinely build on what the participant says with a relevant follow-up before moving to the next topic.
- Never ask for personally identifying information.
- Aim to cover the topics within about ${maxExchanges} participant replies, then wrap up.
- When the topics are covered (or you have reached ~${maxExchanges} replies), thank them warmly and end.

Respond with ONLY a raw JSON object (no markdown, no code fences):
{"message": "your next message to the participant", "complete": false}
Set "complete" to true only on your final wrap-up message.`;

    const apiMessages = msgs.length
      ? msgs.map(m => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: String(m.content || '')
        }))
      : [{ role: 'user', content: '(The participant just opened the conversation. Greet them warmly and ask your first question.)' }];

    const completion = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 400,
      system: systemPrompt,
      messages: apiMessages
    });

    const raw = completion.content[0].text || '';
    let parsed;
    try {
      parsed = JSON.parse(raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim());
    } catch (e) {
      parsed = { message: raw.trim(), complete: false };
    }

    // Safety net: force completion if we've gone past the configured limit.
    if (userTurns >= maxExchanges) parsed.complete = true;

    res.status(200).json({
      message: parsed.message || '',
      complete: !!parsed.complete
    });
  } catch (error) {
    console.error('Engage chat error:', error);
    res.status(500).json({ error: error.message });
  }
}
