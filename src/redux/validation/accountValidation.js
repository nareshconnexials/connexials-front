import * as Yup from "yup";

export const createAccountSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(50)
    .required("First Name is required")
    .typeError("must at least 2 character"),
  lastName: Yup.string()
    .min(2)
    .max(50)
    .required("Last Name is required")
    .typeError("must at least 2 character"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const loginAccountSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

