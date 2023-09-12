import React from 'react'
import { useForm, useFormContext } from 'react-hook-form';
import { CustomTextField } from '../ui/customTextFieldProps';
import Typography from "@mui/material/Typography";
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, tarjetaSchema } from './schema';

const FormPago = () => {

    const {
        control,
        formState: {errors},
    
      } = useFormContext();
    return (
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
    )
}

export default FormPago