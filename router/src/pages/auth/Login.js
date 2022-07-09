import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setUser(values);
      navigate(location?.state?.return_url || "/", {
        replace: true,
      });
    },
  });

  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Login</title>
      </Helmet>

      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={values.username}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">LogIn</button>
      </form>
    </>
  );
}
