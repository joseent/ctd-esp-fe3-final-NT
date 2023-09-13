
import * as yup from "yup";

export const schema = yup.object({
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
  });
