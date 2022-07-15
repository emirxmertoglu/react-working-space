import Yup from "./validation";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  about: Yup.string().required(),
  gender: Yup.string().required(),
  skills: Yup.array().required(),
  avatar: Yup.mixed().test({
    test: (file) => file?.name,
    message: "You must choose an avatar!",
  }),
  accept: Yup.boolean().oneOf([true]),
});
