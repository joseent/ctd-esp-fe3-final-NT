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

export interface ComicProps {
    comic: Comics | null;
}

const COMIC_GENERAL_DESCRIPTION = "¡Sumérgete en el emocionante universo de Marvel con este increíble cómic! Descubre las asombrosas aventuras de tus héroes y villanos favoritos mientras luchan por la justicia o el caos en una historia llena de acción, misterio y sorpresas. Este cómic te llevará a lugares inimaginables y te sumergirá en un mundo de poderes extraordinarios, batallas épicas y personajes icónicos. ¡No te pierdas esta emocionante entrega que te mantendrá pegado a sus páginas de principio a fin!"


export const ComicDetail = ({ comic }: ComicProps) => {
    console.log('comic.thumbasdasnail', comic?.creators)
    const router = useRouter();


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
                                        {comic.price}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <Typography gutterBottom  >
                                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                        Precio anterior:
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="div" >
                                        {comic.oldPrice}
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Comprar</Button>
                    </CardActions>
                </Card>
            </Grid >
        </>
    )
}





