import { useSite } from "../context";

export default function SwitchTheme() {
  const { theme, setTheme } = useSite();

  return (
    <>
      <div>Active theme {theme}</div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change theme
      </button>
    </>
  );
}
