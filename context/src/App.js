import { useState } from "react";
import SiteContext from "./context/SiteContext";
import Home from "./views/Home";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const data = {
    theme,
    setTheme,
    language,
    setLanguage,
  };

  return (
    <SiteContext.Provider value={data}>
      <Home />
    </SiteContext.Provider>
  );
}

export default App;
