import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "../context";

export default function Header() {
  const { user, dispatch } = useAuth();

  const logIn = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        id: 1,
        name: "emir",
      },
    });
  };

  const logOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <hr />
      <div>HEADER</div>
      {(user && <button onClick={logOut}>Log Out</button>) || (
        <button onClick={logIn}>Log In</button>
      )}
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </>
  );
}
