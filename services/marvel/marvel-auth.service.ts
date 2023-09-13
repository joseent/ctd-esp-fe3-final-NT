import md5 from "md5";

// const MARVEL_API_PUBLIC_KEY="8b3cb22360a8087b2128e7b31f02ccac"
// const MARVEL_API_PRIVATE_KEY="6f4ab2dcc8095421bb685a1d09772267d774293c"


export const generateAuthenticationString = () => {
    const ts = new Date().getTime();
    const hash = md5(`${ts}${ process.env.MARVEL_API_PRIVATE_KEY}${ process.env.MARVEL_API_PUBLIC_KEY}`)
    return `ts=${ts}&apikey=${ process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}`
}
