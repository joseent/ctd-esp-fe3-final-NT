import React from 'react';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import Typography from "@mui/material/Typography";
import { ErrorMessage } from '@hookform/error-message';
import { CustomTextField } from '../ui/customTextFieldProps';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




const FormInfoPersonal = () => {
    const {
        control,
        formState: { errors },

    } = useFormContext();
    return (
        <>
            <Controller
                name="nombre"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <CustomTextField
                        name="nombre"
                        label="Nombre"
                        type="text"
                        control={control}
                        defaultValue=""
                    />
                )}
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
    );
}

export default FormInfoPersonal;

