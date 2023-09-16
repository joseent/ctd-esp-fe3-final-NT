// import * as React from 'react';

import { NextPage } from 'next'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';
import AccordionComp from 'dh-marvel/components/ui/acordeon';
import { Grid, Snackbar, Typography } from '@mui/material';
import Head from 'next/head';
import { URL_DOMAIN } from 'constantes/urls';


interface Props {
  faqs: FaqsType[]
}

const FaqsPage: NextPage<Props> = ({ faqs }) => {

  return (
    <>
      <Head>
        <title>Marvel Comics - Compra tus cómics favoritos en línea</title>
        <meta name="description" content="Preguntas y respuestas frequentes" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="es" />
        <meta name="author" content="Jose Emanuel Nieva Toppa - Digital House" />
        <meta name="keywords" content="Marvel Comics, cómics, compra en línea, superhéroes, historietas" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      </Head>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        marginTop={10}
        sx={{ minHeight: '100vh', width: "50vw" }}

      >
        <Grid>
          <Typography variant='h4'>Preguntas Frecuentes</Typography >
        </Grid>
        <Grid marginTop={5}>
          {faqs.map((faq) => (
            <AccordionComp key={faq.id} id={faq.id} title={faq.question} subtitle={faq.answer} url={false} />
          ))
          }
        </Grid>
      </Grid >
    </>
  )
}



export const getStaticProps = async () => {

  // Modificar la url por las que nos da Vercel al hacer deploy
  const response = await fetch(`https://ctd-esp-fe3-final-r8dcnhvf5-joseent.vercel.app/api/faqs`)
  const faqs = await response.json()

  return {
    props: {
      faqs
    }
  }

}

export default FaqsPage