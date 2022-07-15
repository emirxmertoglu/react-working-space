import { Helmet } from "react-helmet";
import { Formik, Form, useFormikContext } from "formik";
import {
  Input,
  File,
  Checkbox,
  Textarea,
  Select,
  Radio,
} from "../components/form";
import { useEffect } from "react";
import { ContactSchema, SampleSchema } from "../validations";

const AutoSubmitCode = () => {
  const { values, submitForm } = useFormikContext();
  useEffect(() => {
    if (values.code.length === 6) {
      submitForm();
    }
  }, [values, submitForm]);
  return null;
};

export default function Contact() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Contact</title>
      </Helmet>

      <h2 className="text-3xl text-center font-medium">Contact page</h2>

      <Formik
        initialValues={{ code: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SampleSchema}
      >
        <Form className="hidden">
          <Input label="Enter The Code" name="code" />
          <button
            type="submit"
            className="p-2 mt-2 rounded bg-green-500 text-white"
          >
            Submit
          </button>
          <AutoSubmitCode />
        </Form>
      </Formik>

      <Formik
        initialValues={{
          name: "",
          about: "",
          accept: false,
          gender: 1,
          skills: [],
          avatar: "",
          title: "jr",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={ContactSchema}
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
