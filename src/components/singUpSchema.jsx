import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(20,)
    .required(),

  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .required()
    .matches(/\d+/)
    .matches(/[a-z]+/)
    .matches(/[A-Z]+/)
    .matches(/[!,?{}><%&$#£+-.]+/),
});
