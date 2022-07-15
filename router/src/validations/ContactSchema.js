import Yup from "./validation";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  about: Yup.string().required(),
});
