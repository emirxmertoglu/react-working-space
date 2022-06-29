import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
  return (
    <>
      <hr />
      <div>HEADER</div>
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </>
  );
}
