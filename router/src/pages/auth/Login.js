import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const handleLogin = () => {
    setUser({
      id: 1,
      username: "emirmertoglu",
    });

    navigate(location?.state?.return_url || "/", {
      replace: true,
      state: {
        name: "emir",
      },
    });
  };

  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Login</title>
      </Helmet>

      <h2>Login Page</h2>
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
}
