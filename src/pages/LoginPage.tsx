import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Box sx={{ width: "600px", p: 2 }}>
      <Typography sx={{ mb: 2 }} variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField sx={{ mb: 2 }} label="Name" />
      <Box>
        <Button variant="outlined">Login</Button>
      </Box>
    </Box>
  );
}
