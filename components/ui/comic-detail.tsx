"use client";

import { Comic } from "interface/comic.type";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NextLink from "next/link"
import Image from "next/image";
import AccordionComp from "./acordeon";

export interface ComicProps {
    comic: Comic ;

}

const COMIC_GENERAL_DESCRIPTION = "¡Sumérgete en el emocionante universo de Marvel con este increíble cómic! Descubre las asombrosas aventuras de tus héroes y villanos favoritos mientras luchan por la justicia o el caos en una historia llena de acción, misterio y sorpresas. Este cómic te llevará a lugares inimaginables y te sumergirá en un mundo de poderes extraordinarios, batallas épicas y personajes icónicos. ¡No te pierdas esta emocionante entrega que te mantendrá pegado a sus páginas de principio a fin!"

const extractLastNumberFromURL = (url: string) => {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    const numbers = lastPart.match(/\d+/);

    if (numbers) {
        return numbers[0]
    } else {
        return "0";
    }
}

export const ComicDetail = ({ comic }: ComicProps) => {


    return (
        <>
            <Image src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                width={500}
                height={700}
                alt="Picture of the author" />
            <Grid item xs={6} lg={6} md={3}>
                <Card >
                    <CardContent>
                        <Typography gutterBottom  >
                            <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                Publicado:
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div" >
                                {comic?.dates[0].date}
                            </Typography>
                        </Typography>
                        {
                            comic?.creators?.items[0]?.name ?
                                <Grid container spacing={2}>
                                    <Grid item lg={6} md={6}>
                                        <Typography gutterBottom  >
                                            <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                                {comic?.creators?.items[0]?.role}:
                                            </Typography>
                                            <Typography gutterBottom variant="body1" component="div" >
                                                {comic?.creators?.items[0]?.name}
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={6} md={6}>
                                        <Typography gutterBottom  >
                                            <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                                {comic?.creators?.items[1]?.role}:
                                            </Typography>
                                            <Typography gutterBottom variant="body1" component="div" >
                                                {comic?.creators?.items[1]?.name}
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                : <></>
                        }
                        <Typography gutterBottom  >
                            <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                Descipcion:
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div" >
                                {comic?.description ? comic?.description : COMIC_GENERAL_DESCRIPTION}
                            </Typography>
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6}>
                                <Typography gutterBottom  >
                                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                        Precio actual:
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="div" >
                                        {comic?.price}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <Typography gutterBottom  >
                                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                        Precio anterior:
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="div" >
                                        {comic?.oldPrice}
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>

                    {comic?.characters?.items?.map((char, index) => (
                    <AccordionComp key={char.name} id={index} title={char.name} subtitle={extractLastNumberFromURL(char.resourceURI)} url />
                    ))}
                    < CardActions >
                        {comic?.stock > 0 ? (
                            <NextLink
                                href={{ pathname: `/checkout/${comic?.id}` }}
                            >
                                <Button
                                    variant="contained"
                                >
                                    COMPRAR
                                </Button>
                            </NextLink>
                        ) : (
                            <Button
                                disabled
                                variant="contained"
                            >
                                SIN STOCK
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Grid >
        </>
    )
}





