import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NextLink from "next/link"
import Button from '@mui/material/Button';



interface Props {
    id: number;
    title: string;
    subtitle: string;
    url: boolean
}

const AccordionComp = ({ id, title, subtitle, url }: Props) => {
    return (
        <>
            <Accordion key={id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${id}-content`}
                    id={`panel${id}-header`}
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {url ?
                        <NextLink href={`/personajes/${subtitle}`}>
                            <Button size="small">Ver Mas</Button>
                        </NextLink>
                        :
                        <Typography>{subtitle}</Typography>
                    }

                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionComp