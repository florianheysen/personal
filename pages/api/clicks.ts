import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db().collection('clicks').find().toArray()
  res.status(200).json(JSON.parse(JSON.stringify(data[0]?.number)))
}
