import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import MessagePage from "./pages/MessagePage";
import MessagesPage from "./pages/MessagesPage";
import SendMessagePage from "./pages/SendMessagePage";
import Divider from "@mui/material/Divider";
import AuthContext from "./context/AuthContext";
import useMessages from "./hooks/useMessages";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { messages } = useMessages(name);

  const authContextProviderValue = useMemo(
    () => ({
      isAuth,
      setIsAuth,
      name,
      setName,
    }),
    [isAuth, setIsAuth]
  );

  return (
    <div className="App">
      <Box sx={{ px: 5, py: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" gutterBottom>
          Mail app
        </Typography>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Sidebar />
        <AuthContext.Provider value={authContextProviderValue}>
          <Routes>
            <Route index path="/" element={<LoginPage />} />
            <Route path="/messages" element={<MessagesPage messages={messages} />} />
            <Route path="/messages/:id" element={<MessagePage messages={messages} />} />
            <Route path="/send" element={<SendMessagePage />} />
          </Routes>
        </AuthContext.Provider>
      </Box>
    </div>
  );
}

export default App;
