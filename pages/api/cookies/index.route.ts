import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Configura la cookie en la respuesta
    res.setHeader('set-cookie', 'access-checkout=true; path=/; semesite=lax; httponly')
    res.status(200).json({ text: 'Hello' });
};
