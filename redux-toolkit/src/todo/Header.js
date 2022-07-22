import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../stores/auth";

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = (user) => {
    dispatch(login(user));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h2>Logo</h2>
      {!user && (
        <nav>
          <button onClick={() => handleLogin({ id: 1, username: "emir" })}>
            Login as emir
          </button>
          <button onClick={() => handleLogin({ id: 2, username: "tayfun" })}>
            Login as tayfun
          </button>
        </nav>
      )}
      {user && (
        <nav>
          Welcome, {user.username}
          <button onClick={handleLogout}>Logout</button>
        </nav>
      )}
    </header>
  );
}
