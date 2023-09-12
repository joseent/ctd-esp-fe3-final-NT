// import * as React from 'react';

import { NextPage } from 'next'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';
import AccordionComp from 'dh-marvel/components/ui/acordeon';
import { Grid, Snackbar, Typography } from '@mui/material';


interface Props {
  faqs: FaqsType[]
}

const FaqsPage: NextPage<Props> = ({ faqs }) => {

  return (
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
  )
}



export const getStaticProps = async () => {

  // Modificar la url por las que nos da Vercel al hacer deploy
  const response = await fetch('http://localhost:3000/api/faqs')
  const faqs = await response.json()

  return {
    props: {
      faqs
    }
  }

}

export default FaqsPage