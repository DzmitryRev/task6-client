import React, { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MessageList from "../components/MessageList";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IMessage } from "../models/message-model";

export default function MessagesPage({ messages }: { messages: IMessage[] }) {
  const { isAuth, name } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

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
