import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import { Input, File, Checkbox, Textarea, Select } from "../components/form";

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
          name: "Emir Mertoglu",
          about: "Sample description..",
          accept: false,
          gender: 2,
          skills: ["react", "js"],
          avatar: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form className="p-6">
            <Input label="Name Surname" name="name" />
            <br />
            <Textarea label="About" name="about" rows="6" />
            <br />
            <Select
              label="Gender"
              name="gender"
              options={[
                { key: 1, value: "Female" },
                { key: 2, value: "Male" },
              ]}
              getOriginal={true}
            />
            <br />
            <Select
              label="Skills"
              name="skills"
              options={[
                { key: "react", value: "React" },
                { key: "js", value: "JavaScript" },
                { key: "css", value: "CSS" },
                { key: "html", value: "HTML" },
              ]}
              getOriginal={true}
              multiple={true}
            />
            <br />
            {/* <Field name="skills" component="select" multiple={true}>
              <option value="react">React</option>
              <option value="js">JavaScript</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
            </Field>
            <br /> */}
            <File label="Avatar" name="avatar" />
            <br />
            <Checkbox label="Agree and continue" name="accept" />
            <br />
            <button disabled={!values.accept} type="submit">
              Submit
            </button>
            <br />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </>
  );
}
