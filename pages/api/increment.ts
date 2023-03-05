import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const mongoClient = await clientPromise;
    const data = await mongoClient
        .db()
        .collection('clicks')
        .updateOne(
            { _id: new ObjectId("6404b173fed5b65a066cfad3") },
            { $inc: { number: 1 } }
        );

    res.status(200).json(JSON.parse(JSON.stringify(data)));
}
