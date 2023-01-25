import { createContext } from "react";
import { IMessage } from "../models/message-model";

const AuthContext = createContext<{
  isAuth: boolean;
  name: string;
  setIsAuth: (value: boolean) => void;
  setName: (name: string) => void;
}>({
  isAuth: false,
  name: "",
  setIsAuth: (value: boolean) => {},
  setName: (name: string) => {},
});

export default AuthContext;
