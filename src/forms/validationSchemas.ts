import * as yup from "yup";

export const loginValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

export const sendMessageValidationSchema = yup.object({
  recipient: yup.string().required("Resipient is required"),
  subject: yup.string().required("Subject is required"),
  body: yup.string().required("Body is required"),
});
