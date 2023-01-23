import React from "react";

import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function MessagePage() {
  const { id } = useParams();

  console.log(id);
  return (
    <Box sx={{ width: "600px", p: 2 }}>
      <Typography variant="h5" gutterBottom>
        asasdasdasd
      </Typography>
      <Typography variant="h6" gutterBottom>
        asdasdasd
      </Typography>
      <Typography variant="body1" gutterBottom>
        sdasd
      </Typography>
    </Box>
  );
}
