import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function SwitchLanguage() {
  const { language, setLanguage } = useContext(SiteContext);

  return (
    <>
      <div>Active language {language}</div>
      <button onClick={() => setLanguage(language === "en" ? "tr" : "en")}>
        Change language
      </button>
    </>
  );
}
