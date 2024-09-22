import type { NextApiRequest, NextApiResponse } from 'next';
// on demand ISR

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate('/'); // 해당 handler로 접속이 요청되면 / 루트를 생성
    return res.json({ revalidate: true });
  } catch (err) {
    res.status(500).send('Revalidation Failed');
  }
}
