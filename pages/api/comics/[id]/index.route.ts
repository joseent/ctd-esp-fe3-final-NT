import type { NextApiRequest, NextApiResponse } from "next";
import { ERROR_SERVER } from "dh-marvel/services/comic/comics.errors";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Comic } from "interface/comic.type";

type Data = Comic | { error: string; message: string };

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  const { id } = req.query;
  res.setHeader("Content-Type", "application/json");
  const idNumber = parseInt(`${id}`);

  try {
    const result: Comic = await getComic(idNumber);
    res.status(200).json(result);
    return;
  } catch (err) {
    res.status(500).json(ERROR_SERVER);
  }
}