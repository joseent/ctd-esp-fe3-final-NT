"use client";

import { Comics } from "interface/character";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export interface ComicsProps {
    comics: Comics[] | null;
}


export const ComicCard = ({ comics }: ComicsProps) => {
    return (
        <>
            {comics?.map((comic) => (

                <>
                    <Grid key={comic.key} item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={comic.thumbnail}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {comic.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver Detalle</Button>
                                <Button size="small">Comprar</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            ))}
        </>
    )
}





