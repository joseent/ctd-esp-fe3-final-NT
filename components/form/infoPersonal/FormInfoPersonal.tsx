import React from 'react';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import Typography from "@mui/material/Typography";
import { ErrorMessage } from '@hookform/error-message';
import { CustomTextField } from '../../ui/customTextFieldProps';
import { schema } from "./schema"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@mui/material';

interface FormInfoPersonalProps {
    data: any; // El tipo de data depende de tu estructura de datos
    onUpdate: (newData: any) => void;
    onNext: () => void;
    onPrev: () => void;
    activeStep: number;
}


const FormInfoPersonal = ({ data, onUpdate, onNext, onPrev, activeStep }: FormInfoPersonalProps) => {
    
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
        onUpdate({ dataPersonal: dataValues });
        onNext()
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <CustomTextField
                    name="nombre"
                    label="Nombre"
                    type="text"
                    control={control}
                    defaultValue={data.nombre}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="nombre" />
                </Typography>

                <CustomTextField
                    name="apellido"
                    label="Apellido"
                    type="text"
                    control={control}
                    defaultValue={data.apellido}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="apellido" />
                </Typography>


                <CustomTextField
                    name="email"
                    label="Email"
                    type="email" // Utiliza el tipo de entrada 'email' para validar automáticamente la dirección de correo electrónico
                    control={control}
                    defaultValue={data.email}
                />
                <Typography variant='caption' color='red'>
                    <ErrorMessage errors={errors} name="email" />
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    siguiente
                </Button>
            </form>
        </>
    );
}


export default FormInfoPersonal;

