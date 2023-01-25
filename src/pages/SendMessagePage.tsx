import React, { useContext, useEffect, useState } from "react";
import { Alert, Autocomplete, Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { sendMessageInitialValue } from "../forms/initialValues";
import { sendMessageValidationSchema } from "../forms/validationSchemas";
import MailService from "../services/mailSevice";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IMessageFor } from "../models/message-model";

export default function SendMessagePage() {
  const { isAuth, name } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const names = useQuery<string[]>(
    ["user-names"],
    async () => {
      const { data } = await MailService.getAllUserNames();
      return data;
    },
    { initialData: [] }
  );

  const sendMessage = useMutation({
    mutationFn: ({ recipient, subject, body }: IMessageFor) => {
      return MailService.sendMessage(recipient, name, subject, body);
    },
  });

  useEffect(() => {
    if (sendMessage.isSuccess) {
      setTimeout(() => {
        sendMessage.reset();
      }, 3000);
    }
  }, [sendMessage.isSuccess]);

  const formik = useFormik({
    initialValues: sendMessageInitialValue,
    validationSchema: sendMessageValidationSchema,
    onSubmit: (values, { resetForm }) => {
      sendMessage.mutate(values, { onSuccess: resetForm });
    },
  });

  return (
    <Box sx={{ width: "600px", p: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={names.data}
          onSelect={formik.handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ mb: 2, width: "320px" }}
              name="recipient"
              label={
                formik.touched.recipient
                  ? formik.touched.recipient && formik.errors.recipient
                  : "Recipient"
              }
              value={formik.values.recipient}
              error={formik.touched.recipient && !!formik.errors.recipient}
              onChange={formik.handleChange}
            />
          )}
        />
        <TextField
          sx={{ mb: 2 }}
          name="subject"
          label={
            formik.touched.subject ? formik.touched.subject && formik.errors.subject : "Subject"
          }
          value={formik.values.subject}
          error={formik.touched.subject && !!formik.errors.subject}
          onChange={formik.handleChange}
          autoComplete="off"
          fullWidth
        />
        <TextField
          sx={{ mb: 2 }}
          name="body"
          multiline
          rows={10}
          label={formik.touched.body ? formik.touched.body && formik.errors.body : "Body"}
          value={formik.values.body}
          error={formik.touched.body && !!formik.errors.body}
          onChange={formik.handleChange}
          autoComplete="off"
          fullWidth
        />
        <Box sx={{ mb: 2 }}>
          <Button variant="outlined" type="submit">
            <SendIcon />
          </Button>
        </Box>
        {sendMessage.isError && <Alert severity="error">Network error. Try again.</Alert>}
        {sendMessage.isSuccess && <Alert severity="success">Successful!</Alert>}
      </form>
    </Box>
  );
}
