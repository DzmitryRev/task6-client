import { Box } from "@mui/material";
import React from "react";
import MessageList from "../components/MessageList";

export default function MessagesPage() {
  return (
    <Box sx={{ width: "600px" }}>
      <MessageList />
    </Box>
  );
}
