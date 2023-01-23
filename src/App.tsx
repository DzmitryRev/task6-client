import { Box, Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MessageList from "./components/MessageList";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import MessagePage from "./pages/MessagePage";
import MessagesPage from "./pages/MessagesPage";
import SendMessagePage from "./pages/SendMessagePage";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="App">
      <Box sx={{ px: 5, py: 2 }}>
        <Typography variant="h5" gutterBottom>
          Mail app
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Sidebar />
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/:id" element={<MessagePage />} />
          <Route path="/send" element={<SendMessagePage />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
