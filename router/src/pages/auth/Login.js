import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

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
      <h1>Login Page</h1>
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
}
