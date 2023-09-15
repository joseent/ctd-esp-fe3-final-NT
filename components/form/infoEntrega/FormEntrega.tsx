import React from 'react'
import { useForm, useFormContext } from 'react-hook-form';
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


const FormEntrega = ({ data, onUpdate, onNext, onPrev, activeStep }: FormInfoPersonalProps) => {
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
    onUpdate({ dataEntrega: dataValues });
    onNext()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <CustomTextField
          name="direccion"
          label="Dirección"
          type="text"
          control={control}
          defaultValue={data.direccion}
          required
        />

        <Typography variant='caption' color='red'>
          <ErrorMessage errors={errors} name="direccion" />
        </Typography>
        <CustomTextField
          name="departamento"
          label="Departamento, piso, etc"
          type="text"
          control={control}
          defaultValue={data.departamento}
        />

        <Typography variant='caption' color='red'>
          <ErrorMessage errors={errors} name="departamento" />
        </Typography>
        <CustomTextField
          name="ciudad"
          label="Ciudad"
          type="text"
          control={control}
          defaultValue={data.ciudad}
          required
        />

        <Typography variant='caption' color='red'>
          <ErrorMessage errors={errors} name="ciudad" />
        </Typography>
        <CustomTextField
          name="provincia"
          label="Provincia"
          type="text"
          control={control}
          defaultValue={data.provincia}
          required
        />
        <Typography variant='caption' color='red'>
          <ErrorMessage errors={errors} name="provincia" />
        </Typography>

        <CustomTextField
          name="codigoPostal"
          label="Código postal"
          type="text"
          control={control}
          defaultValue={data.codigoPostal}
          required
        />
        <Typography variant='caption' color='red'>
          <ErrorMessage errors={errors} name="codigoPostal" />
        </Typography>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={()=> {onPrev()}}
        >
          atras
        </Button>
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
  )
}

export default FormEntrega