import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <>
      <h1>Profile page</h1>
      {!user && (
        <Link
          to="/auth/login"
          style={{
            padding: "5px 10px",
            border: "2px solid green",
            borderRadius: 4,
          }}
        >
          LogIn
        </Link>
      )}
      {user && <button onClick={handleLogout}>LogOut</button>}
    </>
  );
}
