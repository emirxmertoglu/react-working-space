import Yup from "./validation";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  about: Yup.string().required(),
  gender: Yup.string().required(),
  skills: Yup.array().required().min(1, "You must select at least 1 skill!"),
  title: Yup.string().required("You must select your title!"),
  avatar: Yup.mixed().test({
    test: (file) => file?.name,
    message: "You must choose an avatar!",
  }),
  accept: Yup.boolean().oneOf([true]),
});
