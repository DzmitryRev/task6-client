import { createContext } from "react";

const AuthContext = createContext<{
  isAuth: boolean;
  name: string | null;
  setIsAuth: (value: boolean) => void;
  setName: (name: string) => void;
}>({
  isAuth: false,
  name: null,
  setIsAuth: (value: boolean) => {},
  setName: (name: string) => {}
});

export default AuthContext;
