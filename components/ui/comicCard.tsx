"use client";

import { Comic } from "interface/comic.type";
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
import Tooltip from '@mui/material/Tooltip';
// import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { useEffect } from "react";
import { getComicsById } from "dh-marvel/services/comic/comic.service";

export interface ComicsProps {
    comicsArr: Comic[] | null;
}

const cortarYAgregarElipsis = (texto: string, longitudMaxima: number): string => {
    if (texto.length <= longitudMaxima) {
        return texto;
    } else {
        return texto.slice(0, longitudMaxima) + '...';
    }
}



export const ComicCard = ({ comicsArr }: ComicsProps) => {
    const router = useRouter();

    const handleBuy = async (id: number) => {
        const response: Comic = await getComicsById(id);

        if (response.stock > 0) {
            router.push({
                pathname: `/checkout/${id}`,
            });
        } else {
            router.push(`/comics/${id}`);
        }
    };



    return (
        <>
            {comicsArr && comicsArr?.map((comic) => (

                <>
                    <Grid key={comic.id} item xs={6} md={3}>
                        <Card key={comic.id} sx={{ maxWidth: 345 }}>
                            <Image key={comic.id} src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                                width={500}
                                height={750}
                                alt="Picture of the author" />
                            <CardContent>
                                <Tooltip title={comic.title} placement="bottom">
                                    <Typography gutterBottom variant="h5" component="div">
                                        {cortarYAgregarElipsis(comic.title, 20)}
                                    </Typography>
                                </Tooltip>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <NextLink href={`/comics/${comic.id}`}>
                                    <Button size="small">Ver Detalle</Button>
                                </NextLink>
                                < Button onClick={() => handleBuy(comic.id)} color="primary" variant="contained">
                                    COMPRAR
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                </>
            ))
            }
        </>
    )
}





