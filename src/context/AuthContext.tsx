import { createContext } from "react";
import { IMessage } from "../models/message-model";

const AuthContext = createContext<{
  isAuth: boolean;
  name: string | null;
  messages: IMessage[];
  setIsAuth: (value: boolean) => void;
  setName: (name: string) => void;
  setMessages: (messages: IMessage[]) => void;
}>({
  isAuth: false,
  name: null,
  messages: [],
  setIsAuth: (value: boolean) => {},
  setName: (name: string) => {},
  setMessages: (messages: IMessage[]) => {},
});

export default AuthContext;
