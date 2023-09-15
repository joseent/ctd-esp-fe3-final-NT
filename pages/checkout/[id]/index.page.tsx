
import StepperComp from 'dh-marvel/components/ui/stepper'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Grid, Snackbar, Typography } from '@mui/material';
import FormEntrega from 'dh-marvel/components/form/infoEntrega/FormEntrega';
import FormPago from 'dh-marvel/components/form/infoPago/FormPago';


import FormInfoPersonal from 'dh-marvel/components/form/infoPersonal/FormInfoPersonal';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import { Spinner } from 'dh-marvel/components/ui/spinner';
import { Comics } from 'interface/comic.type';
import { ComicCheckoutCard } from 'dh-marvel/components/ui/comicCheckoutCard';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';
import { postCheckout } from 'dh-marvel/services/checkout/checkout.service';



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
  },
  comic: {
    nombre: "",
    imagen: "",
    precio: ""
  }
};




const Checkout: NextPage = () => {

  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(initialData);
  const [comicData, setComicData] = useState<Comics>();
  const [error, setError] = useState<string | null>(null);


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



  const onFinalSubmit = async ({ dataTarjeta }: any) => {


    const checkoutDataFinal = {
      customer: {
        name: data.dataPersonal.nombre,
        lastname: data.dataPersonal.apellido,
        email: data.dataPersonal.email,
        address: {
          address1: data.dataEntrega.direccion,
          address2: data.dataEntrega.departamento,
          city: data.dataEntrega.ciudad,
          state: data.dataEntrega.provincia,
          zipCode: data.dataEntrega.codigoPostal,

        }
      },
      card: {
        number: dataTarjeta.numeroTarjeta,
        cvc: dataTarjeta.codigoSeguridad,
        expDate: dataTarjeta.fechaExpiracion,
        nameOnCard: dataTarjeta.nombreEnTarjeta,
      },
      order: {
        name: data.comic.nombre,
        image: data.comic.imagen,
        price: parseInt(data.comic.precio)
      }
    }

    const response = await postCheckout(checkoutDataFinal);

    try {
      if (!response.error) {
        
        router.push('/confirmacion-compra');
        
        const checkoutDataLocal = {
          customer: checkoutDataFinal.customer,
          order: checkoutDataFinal.order
        };
        
        const checkoutDataString = JSON.stringify(checkoutDataLocal);
        
        localStorage.setItem("checkoutData", checkoutDataString);
      } else {
        console.log("ERR", response.error);

        setError(`${response.error}- - -${response.message}`);
        setOpenSnackbar(true);
      }
    } catch (error: any) {
      setError(`${response.error}- - -${response.message}`);
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
          setComicData(data)
          handleDataUpdate({
            comic: {
              nombre: data.title,
              imagen: `${data.thumbnail.path}.${data.thumbnail.extension}`,
              precio: data.price
            }
          })

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
              checkoutFinal={(dataTarjeta) => onFinalSubmit({ dataTarjeta })}
            />
          )}
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={error || "Error al realizar la compra. Intente nuevamente."}
        />
      </Grid>
    </Grid>
  );
};

(Checkout as any).Layout = LayoutCheckout;
export default Checkout