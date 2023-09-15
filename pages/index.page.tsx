import type { NextPage } from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Grid from '@mui/material/Grid';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetServerSideProps } from "next";
import { Comic } from "../interface/comic.type"
import { useState } from 'react';
import { ComicCard } from 'dh-marvel/components/ui/comicCard';
import { LoadMore } from 'dh-marvel/components/load-more';


interface Props {
    comics: Comic[];
}

const Index: NextPage<Props> = ({ comics }) => {
    const [loadedComics, setLoadedComics] = useState<Comic[]>(comics || []);

    return (
        <>
            <Head>
                <title>Marvel Comics - Compra tus cómics favoritos en línea</title>
                <meta name="description" content="Descubre una amplia selección de cómics de Marvel y realiza compras en línea de manera segura y conveniente." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="language" content="es" />
                <meta name="author" content="Jose Emanuel Nieva Toppa - Digital House" />
                <meta name="keywords" content="Marvel Comics, cómics, compra en línea, superhéroes, historietas" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            </Head>

            <BodySingle title={"Marvel Comics"}>
                <Grid container spacing={2}>
                    <ComicCard comicsArr={loadedComics} />
                    <LoadMore />
                </Grid>

            </BodySingle>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const comics = await getComics(0, 12);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate'
    )


    return {
        props: {
            comics: comics.data.results
        },
    };
};

export default Index
