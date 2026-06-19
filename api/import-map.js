import Anthropic from '@anthropic-ai/sdk';

// Smart-import mapper for the Explore response importer.
// Given the uploaded file's columns (with sample values) and the survey's existing
// questions, decide for each column whether it maps to an existing question, should
// become a NEW question (with an inferred type), or should be ignored (ids, names, etc.).
// If the survey has no questions yet, also propose a survey title.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { columns = [], existingQuestions = [] } = req.body || {};
  if (!Array.isArray(columns) || columns.length === 0) {
    return res.status(400).json({ error: 'No columns provided.' });
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const colText = columns.map((c, i) => {
      const samples = (Array.isArray(c.samples) ? c.samples : [])
        .slice(0, 5)
        .map(s => JSON.stringify(String(s).slice(0, 100)))
        .join(', ');
      return `${i + 1}. "${c.name}" — samples: [${samples}]`;
    }).join('\n');

    const hasQuestions = Array.isArray(existingQuestions) && existingQuestions.length > 0;
    const qText = hasQuestions
      ? existingQuestions.map(q => `- id="${q.id}" type="${q.type}" text="${String(q.text || '').replace(/"/g, "'")}"`).join('\n')
      : '(none — this survey has no questions yet)';

    const prompt = `You map an uploaded spreadsheet of survey responses onto a survey. For EACH column, decide what it should become.

Question types you may assign to a NEW question:
- "rating" — a numeric scale (e.g. 1-5)
- "single" — multiple choice, exactly one answer
- "multi" — checkboxes, several answers (cells often contain values separated by ; , or |)
- "text" — free text / paragraph
- "calendar" — a date

EXISTING QUESTIONS in the survey:
${qText}

COLUMNS in the uploaded file (with sample values):
${colText}

For EACH column choose exactly one action:
- "map": this column answers an EXISTING question — return its exact id in "questionId".
- "new": this is response data with no matching question — create a question for it. Infer the best "type" from the samples; for "single"/"multi" include the distinct "options" you can see in the samples; write a clean human-readable "text" (not just the raw header).
- "ignore": this column is NOT a survey answer (respondent id, name, email, row number, a date/timestamp column) — skip it.

Rules:
- Only "map" when a column clearly answers an existing question; otherwise prefer "new".
- Use each existing question id at most once.
- Be decisive and consistent with the sample data.
${hasQuestions ? '' : '- There are no existing questions, so also return a concise "surveyTitle" summarising the data.'}

Return ONLY raw JSON, no markdown, no commentary:
{${hasQuestions ? '' : '"surveyTitle":"...",'}"columns":[{"column":"<exact column name>","action":"map|new|ignore","questionId":"<id when map>","newQuestion":{"text":"...","type":"rating|single|multi|text|calendar","options":["..."]}}]}`;

    const message = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 2500,
      messages: [{ role: 'user', content: prompt }]
    });

    const raw = (message.content[0] && message.content[0].text) || '{}';
    let result;
    try {
      result = JSON.parse(raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim());
    } catch (e) {
      console.error('import-map: invalid JSON from model', raw);
      return res.status(502).json({ error: 'AI returned invalid JSON.' });
    }
    if (!result || !Array.isArray(result.columns)) {
      return res.status(502).json({ error: 'AI response missing columns.' });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('import-map error:', error);
    res.status(500).json({ error: error.message });
  }
}
