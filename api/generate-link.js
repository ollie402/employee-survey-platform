export default function handler(req, res) {
  const randomId = Math.random().toString(36).substring(7);
  res.status(200).json({ 
    link: `/chat.html?id=chat_${randomId}`
  });
}