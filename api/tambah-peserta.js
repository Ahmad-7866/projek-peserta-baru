export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const data = req.body;
  const response = await fetch('https://script.google.com/macros/s/AKfycbyUKPFBGT1zzOt0BLKb6E8tEp8DazCMnUJQ2ArFvWM0UmS0eTVsmuvRoSmHDQ41VX6r8g/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return res.status(200).json(result);
}