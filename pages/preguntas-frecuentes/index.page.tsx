    // import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NextPage } from 'next'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';

interface Props {
    faqs: FaqsType[]
}

const FaqsPage: NextPage<Props> = ({ faqs }) => {

    return (
        <div>
            <h1>Preguntas Frecuentes</h1>
            {faqs.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${faq.id}-content`}
            id={`panel${faq.id}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
    ))
}
    </div >
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