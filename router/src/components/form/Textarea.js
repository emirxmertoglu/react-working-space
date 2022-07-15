import classNames from "classnames";
import { useField, ErrorMessage } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600 mb-1.5">{label}</div>
      <textarea
        className={classNames({
          "w-full border-b outline-none resize-none": true,
          "focus:border-black": !meta.error || !meta.touched,
          "border-red-600": meta.error && meta.touched,
        })}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="small"
        className="mt-2 block text-xs text-red-600"
      />
    </label>
  );
}
