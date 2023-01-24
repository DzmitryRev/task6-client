import * as yup from "yup";

export const loginValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

export const sendMessageValidationSchema = yup.object({
  recipient: yup.string().required("Name is required"),
  subject: yup.string().required("Name is required"),
  body: yup.string().required("Name is required"),
});
