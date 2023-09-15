import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic,Comics } from 'interface/comic.type';
import Grid from '@mui/material/Grid';
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { ComicDetail } from 'dh-marvel/components/ui/comic-detail';
import { Spinner } from 'dh-marvel/components/ui/spinner';
import { useRouter } from 'next/router';


interface Props {
  comic: Comic;
}

const ComicID: NextPage<Props> = ({ comic }) => {
  const router = useRouter();

  if (router.isFallback === true) {
    return <Spinner />;
  }

  return (

    <>
      <Head>
        <title>Marvel Comics - Compra tus cómics favoritos en línea</title>
        <meta name="description" content={`Comic de Marvel.${comic.title}`} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="es" />
        <meta name="author" content="Jose Emanuel Nieva Toppa - Digital House" />
        <meta name="keywords" content="Marvel Comics, cómics, compra en línea, superhéroes, historietas" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      </Head>
      <BodySingle title={comic.title}>
        <Grid container>
          <ComicDetail comic={comic} />
        </Grid>
      </BodySingle>

    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const data = await getComic(id);

  return {
    props: {
      comic: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Comics = await getComics();

  const paths = data?.data.results.map((comic) => {
    return { params: { id: comic.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};



export default ComicID