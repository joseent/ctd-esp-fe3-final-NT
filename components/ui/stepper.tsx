import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

interface StepperProps {
  activeStep: number;
}


const steps: string[] = [
  'Datos Personales',
  'Dirección de entrega',
  'Datos del pago',
];
 const StepperComp = ({activeStep}:StepperProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label: string) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}



export default StepperComp