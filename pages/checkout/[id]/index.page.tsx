
import StepperComp from 'dh-marvel/components/ui/stepper'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Grid, Snackbar, Typography } from '@mui/material';
import FormEntrega from 'dh-marvel/components/form/FormEntrega';
import FormPago from 'dh-marvel/components/form/FormPago';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInfoPersonal from 'dh-marvel/components/form/FormInfoPersonal';
import { schema } from 'dh-marvel/components/form/schema';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import { Spinner } from 'dh-marvel/components/ui/spinner';
import { Comics } from 'interface/character';
import { ComicCheckoutCard } from 'dh-marvel/components/ui/comicCheckoutCard';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';
import { CustomTextField } from 'dh-marvel/components/ui/customTextFieldProps';
import { ErrorMessage } from '@hookform/error-message';


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
  }
};



const Checkout: NextPage = () => {

  type DataForm = yup.InferType<typeof schema>

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

  const [formData, setFormData] = useState(initialData);

  const router = useRouter();
  const { id } = router.query;
  const [comicData, setComicData] = useState<Comics>();


  const [activeStep, setActiveStep] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = async (data: any) => {
    console.log('data', data)
    console.log("en submit");

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid >
            {/* Paso 1: Datos Personales */}
            {activeStep === 0 && (
              // <FormInfoPersonal />
              <>

                <CustomTextField
                  name="nombre"
                  label="Nombre"
                  type="text"
                  control={control}
                  defaultValue=""
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      dataPersonal: {
                        ...prevData.dataPersonal,
                        nombre: e.target.value,
                      },
                    }));
                  }}
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="nombre" />
                </Typography>

                <CustomTextField
                  name="apellido"
                  label="Apellido"
                  type="text"
                  control={control}
                  defaultValue=""
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="apellido" />
                </Typography>


                <CustomTextField
                  name="email"
                  label="Email"
                  type="email" // Utiliza el tipo de entrada 'email' para validar automáticamente la dirección de correo electrónico
                  control={control}
                  defaultValue=""
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="email" />
                </Typography>

              </>
            )}

            {/* Paso 2: Dirección de Entrega */}
            {activeStep === 1 && (
              // <FormEntrega />
              <>
                <CustomTextField
                  name="direccion"
                  label="Dirección"
                  type="text"
                  control={control}
                  defaultValue=""
                  required // Agrega el atributo 'required' para marcarlo como campo requerido
                />

                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="direccion" />
                </Typography>
                <CustomTextField
                  name="departamento"
                  label="Departamento, piso, etc"
                  type="text"
                  control={control}
                  defaultValue=""
                />

                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="departamento" />
                </Typography>
                <CustomTextField
                  name="ciudad"
                  label="Ciudad"
                  type="text"
                  control={control}
                  defaultValue=""
                  required // Agrega el atributo 'required' para marcarlo como campo requerido
                />

                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="ciudad" />
                </Typography>
                <CustomTextField
                  name="provincia"
                  label="Provincia"
                  type="text"
                  control={control}
                  defaultValue=""
                  required // Agrega el atributo 'required' para marcarlo como campo requerido
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="provincia" />
                </Typography>

                <CustomTextField
                  name="codigoPostal"
                  label="Código postal"
                  type="text"
                  control={control}
                  defaultValue=""
                  required // Agrega el atributo 'required' para marcarlo como campo requerido
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="codigoPostal" />
                </Typography>
              </>
            )}

            {/* Paso 3: Datos de Pago */}
            {activeStep === 2 && (
              // <FormPago />
              <>
                <CustomTextField
                  name="numeroTarjeta"
                  label="Número de tarjeta"
                  type="text"
                  control={control}
                  defaultValue=""
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="numeroTarjeta" />
                </Typography>

                <CustomTextField
                  name="nombreEnTarjeta"
                  label="Nombre como aparece en la tarjeta"
                  type="text"
                  control={control}
                  defaultValue=""
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="nombreEnTarjeta" />
                </Typography>

                <CustomTextField
                  name="fechaExpiracion"
                  label="Fecha de expiración"
                  type="text" // Puedes usar un campo de texto para la fecha de expiración o implementar un selector de fecha según tus necesidades
                  control={control}
                  defaultValue=""
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="fechaExpiracion" />
                </Typography>

                <CustomTextField
                  name="codigoSeguridad"
                  label="Código de seguridad"
                  type="password" // Usa el tipo de entrada 'password' para ocultar el valor como una contraseña
                  control={control}
                  defaultValue=""
                />
                <Typography variant='caption' color='red'>
                  <ErrorMessage errors={errors} name="codigoSeguridad" />
                </Typography>

              </>
            )}
          </Grid>

          <Grid >
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
          </Grid>


        </form>
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