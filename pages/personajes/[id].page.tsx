import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import Grid from '@mui/material/Grid';
import { getCharacter, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Character, Characters } from 'interface/character.type';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Spinner } from 'dh-marvel/components/ui/spinner';
import { useRouter } from 'next/router';


interface Props {
  characters: Character;
}

const Characters: NextPage<Props> = ({ characters }) => {
  const router = useRouter();

  if (router.isFallback === true) {
    return <Spinner />;
  }
  return (
    <>
      <Head>
        <title>Marvel Comics - Compra tus cómics favoritos en línea</title>
        <meta name="description" content={`Personaje de Marvel.${characters.name}`} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="es" />
        <meta name="author" content="Jose Emanuel Nieva Toppa - Digital House" />
        <meta name="keywords" content="Marvel Comics, cómics, compra en línea, superhéroes, historietas" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      </Head>
      <BodySingle title={characters.name}>
        <Grid container>
          <Image
            src={`${characters?.thumbnail?.path}.${characters?.thumbnail?.extension}`}
            width={500}
            height={500}
            alt="Picture of the author"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            {characters.description}
          </Typography>
        </Grid>
      </BodySingle>

    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const data = await getCharacter(id);

  return {
    props: {
      characters: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Characters = await getComics();

  const paths = data?.data?.results.map((character) => {
    return { params: { id: character.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};




export default Characters