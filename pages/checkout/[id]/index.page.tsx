
import StepperComp from 'dh-marvel/components/ui/stepper'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Grid, Snackbar, Typography } from '@mui/material';
import FormEntrega from 'dh-marvel/components/form/infoEntrega/FormEntrega';
import FormPago from 'dh-marvel/components/form/infoPago/FormPago';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInfoPersonal from 'dh-marvel/components/form/infoPersonal/FormInfoPersonal';
import { schema } from 'dh-marvel/components/form/infoPersonal/schema';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import { Spinner } from 'dh-marvel/components/ui/spinner';
import { Comics } from 'interface/character';
import { ComicCheckoutCard } from 'dh-marvel/components/ui/comicCheckoutCard';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';


const initialData = {
  dataPersonal: {
    nombre: "",
    apellido: "",
    email: "",
  },
  dataEntrega: {
    direccion: "",
    departamento: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
  },
  dataTarjeta: {
    numeroTarjeta: "",
    nombreEnTarjeta: "",
    fechaExpiracion: "",
    codigoSeguridad: "",
  },comic:{
    nombre:"",
    precio:""
  }
};



const Checkout: NextPage = () => {

  const {
    handleSubmit,
  } = useForm();

  const [data, setData] = useState(initialData);
  const router = useRouter();
  const { id } = router.query;
  const [comicData, setComicData] = useState<Comics>();
  const [activeStep, setActiveStep] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const handleGoBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleGoForward = () => {
    setActiveStep(activeStep + 1);
  };

  const handleDataUpdate = (newData: any) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };


  const onFinalSubmit = async () => {
       try {

      // router.push('/confirmacion-compra');
      // Aquí puedes realizar la llamada a la API de compra y redirigir al usuario a la página de confirmación si tiene éxito.
    } catch (error) {
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };




  useEffect(() => {
    if (typeof id === 'string' || typeof id === 'number') {
      const idNumber = typeof id === 'string' ? parseInt(id, 10) : id;

      if (idNumber) {
        getComic(idNumber).then((data) => {
          setComicData(data);
        });
      }
    }

  }, [id]);

  if (!comicData) {
    return <Spinner />;
  }

  return (

    <Grid container spacing={2} marginTop={5} paddingRight={12}>
      <Grid item lg={4}>
        <ComicCheckoutCard comic={comicData} />
      </Grid>
      <Grid item lg={8}>
        <StepperComp activeStep={activeStep} />
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Grid >
          {/* Paso 1: Datos Personales */}
          {activeStep === 0 && (
            <FormInfoPersonal
              data={data.dataPersonal}
              onUpdate={handleDataUpdate}
              onNext={handleGoForward}
              onPrev={handleGoBack}
              activeStep={activeStep}
            />
          )}

          {/* Paso 2: Dirección de Entrega */}
          {activeStep === 1 && (
            <FormEntrega
              data={data.dataEntrega}
              onUpdate={handleDataUpdate}
              onNext={handleGoForward}
              onPrev={handleGoBack}
              activeStep={activeStep}
            />
          )}

          {/* Paso 3: Datos de Pago */}
          {activeStep === 2 && (
            <FormPago
              data={data.dataTarjeta}
              onUpdate={handleDataUpdate}
              onNext={handleGoForward}
              onPrev={handleGoBack}
              activeStep={activeStep}
            />
          )}
        </Grid>

        {/* <Grid >
            {activeStep > 0 ?
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, mr: 3 }}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Atras
              </Button> :
              <></>
            }
            {activeStep === 2 ?
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Enviar
              </Button>
              :
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => setActiveStep(activeStep + 1)}
              >
                Siguiente
              </Button>

            }
          </Grid> */}


        {/* </form> */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Error al realizar la compra. Intente nuevamente."
        />
      </Grid>
    </Grid>
  );
};

(Checkout as any).Layout = LayoutCheckout;
export default Checkout