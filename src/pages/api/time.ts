import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export default function handler(req: NextApiRequest, res: NextResponse) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
