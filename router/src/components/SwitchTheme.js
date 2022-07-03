import { useSite } from "../context";

export default function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const toggleTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <>
      <div>Active theme {theme}</div>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
}
