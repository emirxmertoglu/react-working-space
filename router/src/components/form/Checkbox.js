import { useField } from "formik";
import { FiCheck } from "react-icons/all";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <label>
      <div>{label}</div>
      <input {...field} {...props} />
    </label>
  );
}
