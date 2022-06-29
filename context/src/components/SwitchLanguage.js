import { useSite } from "../context";

export default function SwitchLanguage() {
  const { language, dispatch } = useSite();

  const toggleLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };

  return (
    <>
      <div>Active language {language}</div>
      <button onClick={toggleLanguage}>Change language</button>
    </>
  );
}
