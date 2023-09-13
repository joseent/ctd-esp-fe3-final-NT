import * as yup from "yup";


export const schema = yup.object({
    direccion: yup.string().required("Este campo es requerido"),
    departamento: yup.string(),
    ciudad: yup.string().required("Este campo es requerido"),
    provincia: yup.string().required("Este campo es requerido"),
    codigoPostal: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^\d{4}$/, "Debe ser un código postal válido de 4 dígitos"),
  });

