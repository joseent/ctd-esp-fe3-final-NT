import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { CustomTextField } from '../../ui/customTextFieldProps';
import Typography from "@mui/material/Typography";
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from './schema';
import { Button } from '@mui/material';


interface FormInfoPersonalProps {
    data: any; // El tipo de data depende de tu estructura de datos
    onUpdate: (newData: any) => void;
    onNext: () => void;
    onPrev: () => void;
    activeStep: number;
}


const FormPago = ({ data, onUpdate, onNext, onPrev, activeStep }: FormInfoPersonalProps) => {
    type DataForm = yup.InferType<typeof schema>

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });


    const onSubmit = async (data: any) => {

        const dataValues = getValues()
        onUpdate({ dataTarjeta: dataValues });
        
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <CustomTextField
                    name="numeroTarjeta"
                    label="Número de tarjeta"
                    type="text"
                    control={control}
                    defaultValue={data.numeroTarjeta}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="numeroTarjeta" />
                </Typography>

                <CustomTextField
                    name="nombreEnTarjeta"
                    label="Nombre como aparece en la tarjeta"
                    type="text"
                    control={control}
                    defaultValue={data.nombreEnTarjeta}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="nombreEnTarjeta" />
                </Typography>

                <CustomTextField
                    name="fechaExpiracion"
                    label="Fecha de expiración"
                    type="text" // Puedes usar un campo de texto para la fecha de expiración o implementar un selector de fecha según tus necesidades
                    control={control}
                    defaultValue={data.fechaExpiracion}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="fechaExpiracion" />
                </Typography>

                <CustomTextField
                    name="codigoSeguridad"
                    label="Código de seguridad"
                    type="password" // Usa el tipo de entrada 'password' para ocultar el valor como una contraseña
                    control={control}
                    defaultValue={data.codigoSeguridad}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="codigoSeguridad" />
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => { onPrev() }}
                >
                    atras
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    enviar
                </Button>
            </form>

        </>
    )
}

export default FormPago