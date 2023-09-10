"use client";

import { Comics } from "interface/character";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";
import NextLink from "next/link"
import Image from "next/image";
export interface ComicsProps {
    comicsArr: Comics[] | null;
}


export const ComicCard = ({ comicsArr }: ComicsProps) => {
    console.log('comics', comicsArr[1]?.images[0]?.path)
    const router = useRouter();


    return (
        <>
            {comicsArr && comicsArr?.map((comic) => (

                <>
                    <Grid key={comic.key} item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345 }}>

                            <Image src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                                width={140}
                                height={140}
                                alt="Picture of the author" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {comic.title}
                                </Typography>
                            </CardContent>
                            <CardActions>

                                <NextLink href={`/comics/${comic.id}`}>
                                    <Button size="small">Ver Detalle</Button>
                                </NextLink>
                                <Button size="small">Comprar</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            ))}
        </>
    )
}





