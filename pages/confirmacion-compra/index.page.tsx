import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Paper, Typography, Grid, } from '@mui/material';
import Image from 'next/image';
import { ICheckout } from 'interface/checkout.type';
import { Spinner } from 'dh-marvel/components/ui/spinner';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';


const ConfirmPage: NextPage = () => {
  const [storedData, setstoredData] = useState<ICheckout>()
  const storedCheckoutDataString = localStorage.getItem("checkoutData");

  useEffect(() => {
    if (storedCheckoutDataString) {
      setstoredData(JSON.parse(storedCheckoutDataString))
    }

  }, [])


  if (!storedData) {
    return <Spinner />;
  }

  return (
    <Grid>

      <Grid marginTop={5} marginBottom={5}>
        <Typography variant="h3" textAlign="center" color="green" fontWeight="bold" > ¡Que disfrutes tu compra!</Typography>
      </Grid>

      <Grid container>

        <Grid item sm={12} spacing={2} sx={{ display: "flex", flexDirection: "column", alignContent: 'center', justifyContent:"center" }} >
          <Grid item xs={12} sm={12}>
            <Image src={storedData?.order.image}
              width={400}
              height={550}
              alt="Picture of the author" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5">{storedData?.order.name}</Typography>
          </Grid>
        </Grid>

        <Grid item sm={12} spacing={2} >
          <Grid>
            <Typography variant="h5">Datos Personales:</Typography>
            <Typography>{`Nombre: ${storedData?.customer.name} ${storedData?.customer.lastname}`}</Typography>
            <Typography>{`Email: ${storedData?.customer.email}`}</Typography>
          </Grid>

          <Grid marginTop={2}>


            <Typography variant="h5">Dirección de Entrega:</Typography>
            <Typography>{`Dirección: ${storedData?.customer.address.address1}`}</Typography>
            <Typography>{`Ciudad: ${storedData?.customer.address.city}, ${storedData?.customer.address.state}`}</Typography>
            <Typography>{`Código Postal: ${storedData?.customer.address.zipCode}`}</Typography>
          </Grid>

          <Grid marginTop={2}>

            <Typography variant="h5">Precio Pagado:</Typography>
            <Typography variant="h4">{`$${storedData?.order.price}`}</Typography>
          </Grid>
        </Grid>
      </Grid>


    </Grid>
  )
}
(ConfirmPage as any).Layout = LayoutCheckout;
export default ConfirmPage