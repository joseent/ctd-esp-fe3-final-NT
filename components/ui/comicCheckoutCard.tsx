"use client";

import { Comics } from "interface/character";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    maxWidth: 450, // Ancho máximo de la tarjeta
                    margin: '0 auto', // Centrar la tarjeta horizontalmente
                },
            },
        },
    },
});


export interface ComicsProps {
    comic: Comics | null;
}



export const ComicCheckoutCard = ({ comic }: ComicsProps) => {

    return (
        <ThemeProvider theme={theme}>
            <Grid item>
                <Card>
                    <Image key={comic?.key} src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                        width={600}
                        height={750}
                        alt="Picture of the author" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight="bold">
                            {comic?.title}
                        </Typography>
                        <Grid item display="flex" justifyContent="space-between" alignItems="center" >
                            <Typography sx={{
                                color: 'gray',
                                textDecoration: "line-through"
                            }}>
                                $20.00
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" >
                                $15.00
                            </Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    )
}

