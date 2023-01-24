import React from "react";
import List from "@mui/material/List";
import Message from "./Message";
import { IMessage } from "../models/message-model";

export default function MessageList({ messages }: { messages: IMessage[] }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {messages.map((item) => {
        return <Message key={item._id} subject={item.subject} author={item.author} id={item._id} />;
      })}
    </List>
  );
}
