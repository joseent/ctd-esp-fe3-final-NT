// import type {NextApiRequest, NextApiResponse} from 'next';

// type Data = {
//     data: any;
// } | {
//     error: string;
//     message: string;
// }

// export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
//     // Configura la cookie en la respuesta
//     console.log("asdasdasd");
    
    
//     if(req.method == 'GET') {
//         res.setHeader('set-cookie', 'access-checkout=true; path=/; semesite=lax; httponly')
//         res.status(200).end();
//     } else {
//         console.log("en cookie api error");
//         return res.status(400)
//     };
//   };
  

  import {NextApiRequest, NextApiResponse} from 'next'
import { FaqsType, faqsData } from 'dh-marvel/components/faqs/faqsData';

type Data = {
    data: any;
} | {
    error: string;
    message: string;
}

export default function handler (req:NextApiRequest, res: NextApiResponse) {

if(req.method == 'GET') {
        res.setHeader('set-cookie', 'access-checkout=true; path=/; semesite=lax; httponly')

    return res.status(200).json(faqsData);
} else {
    return res.status(400).json({message: 'Método no autorizado'});
};
};