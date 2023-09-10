import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comics } from 'interface/character';
import Grid from '@mui/material/Grid';
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { ComicDetail } from 'dh-marvel/components/ui/comic-detail';


interface Props {
  comic: Comics;
}

const ComicID: NextPage<Props> = ({ comic }) => {
  console.log('comicID', comic)

  return (

    <>
      <Head>
        <title>DH-MARVEL</title>
        <meta
          name="description"
          content={`Comic de Marvel.${comic.title}`}
        />
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

  const paths = data.data.results.map((comic) => {
    return { params: { id: comic.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};



export default ComicID