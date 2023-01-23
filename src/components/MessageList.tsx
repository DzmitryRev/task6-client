import React from "react";
import List from "@mui/material/List";
import Message from "./Message";

export default function MessageList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Message heading="heading" author="Dima Revchenko" id="1" />
      <Message heading="heading" author="Dima Revchenko" id="2" />
      <Message heading="heading" author="Dima Revchenko" id="3" />
    </List>
  );
}
