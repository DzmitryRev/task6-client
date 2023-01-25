import React, { useContext, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import MailService from "../services/mailSevice";
import { useFormik } from "formik";
import { loginInitialValue } from "../forms/initialValues";
import { loginValidationSchema } from "../forms/validationSchemas";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuth, setName, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/messages");
    }
  }, [isAuth]);

  const formik = useFormik({
    initialValues: loginInitialValue,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      const { name } = values;
      setName(name);
      setIsAuth(true);
    },
  });

  return (
    <Box sx={{ width: "600px", p: 2 }}>
      <Typography sx={{ mb: 2 }} variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          name="name"
          label={formik.touched.name ? formik.touched.name && formik.errors.name : "Name"}
          value={formik.values.name}
          error={formik.touched.name && !!formik.errors.name}
          onChange={formik.handleChange}
          autoComplete="off"
        />
        <Box>
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}
