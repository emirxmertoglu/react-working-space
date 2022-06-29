import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers";

const Context = createContext();

export const useAuth = () => useContext(Context);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : false,
  });

  const data = {
    ...state,
    dispatch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
