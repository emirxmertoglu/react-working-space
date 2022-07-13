import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import {
  Input,
  File,
  Checkbox,
  Textarea,
  Select,
  Radio,
} from "../components/form";

export default function Contact() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Contact</title>
      </Helmet>

      <h2 className="text-3xl text-center font-medium">Contact page</h2>

      <Formik
        initialValues={{
          name: "Emir Mertoglu",
          about: "Sample description..",
          accept: false,
          gender: 2,
          skills: ["react", "js"],
          avatar: "",
          title: "jr",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form className="p-6 m-4 grid gap-y-4 border rounded shadow-lg">
            <Input label="Name Surname" name="name" />
            <Textarea label="About" name="about" rows="6" />
            <Select
              label="Gender"
              name="gender"
              options={[
                { key: 1, value: "Female" },
                { key: 2, value: "Male" },
              ]}
              getOriginal={true}
            />
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
            <Radio
              label="Select Your Title"
              name="title"
              options={[
                { key: "jr", value: "Jr. Developer" },
                { key: "sr", value: "Sr. Developer" },
                { key: "ninja", value: "Ninja Developer" },
              ]}
            />
            <File label="Avatar" name="avatar" />
            <Checkbox label="Agree and continue" name="accept" />
            <button
              className="h-10 px-5 rounded text-sm bg-black text-white"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
