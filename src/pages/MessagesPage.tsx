import React, { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MessageList from "../components/MessageList";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MessagesPage() {
  const { isAuth, messages, name } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  // load messages every 5 sec

  return (
    <Box sx={{ width: "600px", p: 2 }}>
      {messages.length ? (
        <MessageList messages={messages} />
      ) : (
        <Typography variant="h6" gutterBottom>
          You have't messages
        </Typography>
      )}
    </Box>
  );
}
