import React from 'react'
import { useForm, useFormContext } from 'react-hook-form';
import { CustomTextField } from '../ui/customTextFieldProps';
import Typography from "@mui/material/Typography";
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { entregaSchema, schema } from './schema';

const FormEntrega = () => {

  const {
    control,
    formState: {errors},

  } = useFormContext();
  return (
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
  )
}

export default FormEntrega