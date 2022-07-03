import { createContext, useContext, useReducer } from "react";
import { siteReducer } from "../reducers";

const Context = createContext();

export const useSite = () => useContext(Context);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(siteReducer, {
    theme: localStorage.getItem("theme") || "light",
    language: localStorage.getItem("language") || "en",
  });

  const data = {
    ...state,
    dispatch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
