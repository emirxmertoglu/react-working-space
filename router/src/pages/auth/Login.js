import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleLogin = () => {
    setUser({
      id: 1,
      username: "emirmertoglu",
    });
    navigate("/");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
}
