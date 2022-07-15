import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "This field is a required field!",
    oneOf: "This field must be marked!",
  },
  string: {
    min: "This field must be a minimum of ${min} length characters!",
    max: "This field must be a maximum of ${max} length characters!",
  },
});

export default Yup;
