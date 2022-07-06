import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { setUser } = useAuth();

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <>
      <h1>Profile page</h1>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
}
