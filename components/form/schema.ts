
import * as yup from "yup";

// export const personalSchema = yup.object({
//     nombre: yup
//       .string()
//       .required("Este campo es requerido")
//       .min(2, "Mínimo 2 caracteres")
//       .max(10, "Máximo 10 caracteres"),
//     apellido: yup
//       .string()
//       .required("Este campo es requerido")
//       .min(2, "Mínimo 2 caracteres")
//       .max(10, "Máximo 10 caracteres"),
//     email: yup
//       .string()
//       .required("Este campo es requerido")
//       .email("El correo no es válido")
//       .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email válido"),
//   });

// export const entregaSchema = yup.object({
//     direccion: yup.string().required("Este campo es requerido"),
//     departamento: yup.string(),
//     ciudad: yup.string().required("Este campo es requerido"),
//     provincia: yup.string().required("Este campo es requerido"),
//     codigoPostal: yup
//       .string()
//       .required("Este campo es requerido")
//       .matches(/^\d{5}$/, "Debe ser un código postal válido de 5 dígitos"),
//   });

// export const tarjetaSchema = yup.object({
//     numeroTarjeta: yup
//       .string()
//       .required("Este campo es requerido")
//       .matches(/^\d{16}$/, "Debe ser un número de tarjeta válido de 16 dígitos"),
//     nombreEnTarjeta: yup
//       .string()
//       .required("Este campo es requerido")
//       .matches(/^[a-zA-Z ]*$/, "Debe contener solo letras y espacios"),
//     fechaExpiracion: yup
//       .string()
//       .required("Este campo es requerido")
//       .matches(
//         /^(0[1-9]|1[0-2])\/\d{2}$/,
//         "Debe estar en el formato MM/YY (por ejemplo, 01/23)"
//       ),
//     codigoSeguridad: yup
//       .string()
//       .required("Este campo es requerido")
//       .matches(/^\d{3}$/, "Debe ser un código de seguridad válido de 3 dígitos"),
//   });

//   export const schema = yup.object().shape({
//     personalSchema: personalSchema,
//     entregaSchema: entregaSchema,
//     tarjetaSchema: tarjetaSchema
//   });


  
export const schema = yup.object().shape({
    nombre: yup
      .string()
      .required("Este campo es requerido")
      .min(2, "Mínimo 2 caracteres")
      .max(10, "Máximo 10 caracteres"),
    apellido: yup
      .string()
      .required("Este campo es requerido")
      .min(2, "Mínimo 2 caracteres")
      .max(10, "Máximo 10 caracteres"),
    email: yup
      .string()
      .required("Este campo es requerido")
      .email("El correo no es válido")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email válido"),
    direccion: yup.string().required("Este campo es requerido"),
    departamento: yup.string(),
    ciudad: yup.string().required("Este campo es requerido"),
    provincia: yup.string().required("Este campo es requerido"),
    codigoPostal: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^\d{5}$/, "Debe ser un código postal válido de 5 dígitos"),
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


  