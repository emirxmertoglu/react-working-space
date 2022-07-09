import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Login</title>
      </Helmet>

      <h2>Login Page</h2>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          setUser(values);
          navigate(location?.state?.return_url || "/", {
            replace: true,
          });
        }}
      >
        {() => (
          <Form>
            <Field name="username" placeholder="username" />
            <br />
            <Field name="password" type="password" placeholder="password" />
            <br />
            <button type="submit">LogIn</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
