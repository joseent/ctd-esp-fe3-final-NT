
import * as yup from "yup";

export const schema = yup.object({
    numeroTarjeta: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^\d{16}$/, "Debe ser un número de tarjeta válido de 16 dígitos"),
    nombreEnTarjeta: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^[a-zA-Z ]*$/, "Debe contener solo letras y espacios"),
    fechaExpiracion: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Debe estar en el formato MM/YY (por ejemplo, 01/23)"
      ),
    codigoSeguridad: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^\d{3}$/, "Debe ser un código de seguridad válido de 3 dígitos"),
  });


