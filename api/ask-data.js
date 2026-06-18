import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { question, summary, key_themes, response_count, chat_id, samples } = req.body;

  if (!question) return res.status(400).json({ error: 'No question provided' });

  try {
    // Build sample responses for context. Prefer samples passed directly in
    // the request (works for any data source — surveys, engage, etc.);
    // otherwise fall back to fetching a Listen chat's responses by chat_id.
    let sampleResponses = '';
    if (Array.isArray(samples) && samples.length) {
      sampleResponses = samples.filter(Boolean).map(String).slice(0, 30).join('\n');
    } else if (chat_id) {
      const supabase = createClient(
        process.env.SUPABASE_URL || 'https://wdwpqdzndlaldpuzuxyo.supabase.co',
        process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY
      );

      const { data: responses, error: dbError } = await supabase
        .from('chat_responses')
        .select('response_text')
        .eq('chat_id', chat_id)
        .order('submitted_at', { ascending: true })
        .limit(20);

      if (dbError) throw new Error('Database error: ' + dbError.message);

      sampleResponses = (responses || [])
        .map(r => r.response_text)
        .filter(Boolean)
        .join('\n');
    }

    const themesStr = (key_themes || []).join(', ');

    const prompt = `You are an analyst helping interpret employee feedback data. Here is the context:

Summary: ${summary || 'No summary available'}
Key themes: ${themesStr || 'None identified'}
Total responses: ${response_count || 0}

Sample responses:
${sampleResponses || 'No responses available'}

Answer the following question concisely and helpfully based only on the data above:
${question}`;

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 512,
      messages: [{ role: 'user', content: prompt }]
    });

    let answer = message.content[0].text;
    // Strip any markdown fences
    answer = answer.replace(/```[\s\S]*?```/g, '').trim();

    res.status(200).json({ answer });

  } catch (error) {
    console.error('Ask data error:', error);
    res.status(500).json({ error: error.message });
  }
}
