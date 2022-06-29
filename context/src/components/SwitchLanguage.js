import { useSite } from "../context/SiteContext";

export default function SwitchLanguage() {
  const { language, setLanguage } = useSite();

  return (
    <>
      <div>Active language {language}</div>
      <button onClick={() => setLanguage(language === "en" ? "tr" : "en")}>
        Change language
      </button>
    </>
  );
}
