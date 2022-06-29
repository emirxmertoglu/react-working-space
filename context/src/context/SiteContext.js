import { createContext, useState, useContext } from "react";

const Context = createContext();

export const useSite = () => useContext(Context);

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const data = {
    theme,
    setTheme,
    language,
    setLanguage,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
