import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface IMessageProps {
  author: string;
  heading: string;
  id: string;
}

export default function Message({ heading, author, id }: IMessageProps) {
  return (
    <ListItem alignItems="flex-start" sx={{ cursor: "pointer" }}>
      <ListItemAvatar>
        <Avatar>{author[0] || ""}</Avatar>
      </ListItemAvatar>
      <Link to={"/messages/" + id}>
        <ListItemText
          primary={heading}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {author}
              </Typography>
            </React.Fragment>
          }
        />
      </Link>
    </ListItem>
  );
}
