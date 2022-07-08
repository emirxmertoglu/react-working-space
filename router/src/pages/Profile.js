import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet";

export default function Profile() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Profile</title>
      </Helmet>

      <h2>Profile page</h2>
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
