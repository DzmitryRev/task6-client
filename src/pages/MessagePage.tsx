import React, { useContext, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { IMessage } from "../models/message-model";

export default function MessagePage({ messages }: { messages: IMessage[] }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const { id } = useParams();

  const message = messages.find((message) => message._id === id);

  return (
    <Box sx={{ width: "600px", p: 2 }}>
      {message ? (
        <>
          <Typography variant="h5" gutterBottom>
            {message?.subject}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {message?.author}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {message?.body}
          </Typography>
        </>
      ) : (
        <Typography variant="h6" gutterBottom>
          Message not found
        </Typography>
      )}
    </Box>
  );
}
