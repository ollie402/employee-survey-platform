export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { texts, targetLang } = req.body;
  if (!texts || !targetLang) return res.status(400).json({ error: 'Missing texts or targetLang' });

  try {
    const params = new URLSearchParams();
    texts.forEach(t => params.append('text', t));
    params.append('target_lang', targetLang);
    params.append('source_lang', 'auto');

    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: err });
    }

    const data = await response.json();
    const translated = data.translations.map(t => t.text);
    res.status(200).json({ translated });
  } catch (error) {
    console.error('DeepL error:', error);
    res.status(500).json({ error: error.message });
  }
}
