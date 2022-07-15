import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form } from "formik";
import { Input } from "../../components/form";
import { LoginSchema } from "../../validations";

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

      <h2 className="text-3xl text-center font-medium mb-3">Login page</h2>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          setTimeout(() => {
            setUser(values);
            navigate(location?.state?.return_url || "/", {
              replace: true,
            });
          }, 750);
        }}
        validationSchema={LoginSchema}
      >
        {({ values, isSubmitting }) => (
          <Form className="grid gap-y-3 p-4">
            <Input label="Username" name="username" />
            <Input label="Password" name="password" type="password" />
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-black text-sm text-white rounded h-10 disabled:opacity-40"
            >
              LogIn
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
