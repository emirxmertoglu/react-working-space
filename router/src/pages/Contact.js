import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";

export default function Contact() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Contact</title>
      </Helmet>

      <h2>Contact page</h2>

      <Formik
        initialValues={{
          name: "emir",
          about: "",
          gender: 1,
          skills: ["react", "js"],
          accept: false,
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <Field name="name" />
            <br />
            <Field name="about" component="textarea" />
            <br />
            <Field name="gender" component="select">
              <option value={1}>Male</option>
              <option value={2}>Female</option>
            </Field>
            <br />
            <Field name="skills" component="select" multiple={true}>
              <option value="react">React</option>
              <option value="js">JavaScript</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
            </Field>
            <br />
            <label>
              <Field name="accept" type="checkbox" />
              Agree and continue
            </label>
            <br />
            <button disabled={!values.accept} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
