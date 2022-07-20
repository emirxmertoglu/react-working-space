export default function Header({ user, setUser }) {
  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(false);
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
