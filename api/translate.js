export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { texts, targetLang } = req.body;
  if (!texts || !targetLang) return res.status(400).json({ error: 'Missing texts or targetLang' });

  try {
    const langMap = {
      'EN-GB': 'en', 'CY': 'cy', 'FR': 'fr', 'PL': 'pl',
      'RO': 'ro', 'UR': 'ur', 'PA': 'pa', 'AR': 'ar',
      'ES': 'es', 'PT-PT': 'pt', 'IT': 'it', 'DE': 'de',
      'TR': 'tr', 'SO': 'so', 'BN': 'bn'
    };

    const lang = langMap[targetLang] || targetLang.toLowerCase().split('-')[0];

    const translated = await Promise.all(
      texts.map(async (text) => {
        if (!text || text.trim() === '') return text;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.responseStatus === 200) {
          return data.responseData.translatedText;
        }
        return text;
      })
    );

    res.status(200).json({ translated });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: error.message });
  }
}
