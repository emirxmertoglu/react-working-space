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

      <h2 className="text-3xl text-center font-medium">Profile page</h2>
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
      {user && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 block mx-auto mt-4 bg-red-500 rounded text-white text-sm font-medium"
        >
          LogOut
        </button>
      )}
    </>
  );
}
