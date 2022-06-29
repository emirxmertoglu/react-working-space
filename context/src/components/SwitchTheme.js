import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function SwitchTheme() {
  const { theme, setTheme } = useContext(SiteContext);

  return (
    <>
      <div>Active theme {theme}</div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change theme
      </button>
    </>
  );
}
