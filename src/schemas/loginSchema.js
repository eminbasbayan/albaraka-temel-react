import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email formatında giriniz!')
    .required('Email zorunlu!'),
  password: yup
    .string()
    .min(8, 'Parola min 8 karekter olmalıdır!')
    .max(32, 'Parola max 32 karakter olmalıdır'),
});