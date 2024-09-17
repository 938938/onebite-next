import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextResponse<Data>) {
  res.status(200).json({ name: 'abcd' });
}
