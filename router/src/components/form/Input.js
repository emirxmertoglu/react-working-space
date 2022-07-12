import { useField } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600 mb-1.5">{label}</div>
      <input
        className="w-full h-10 border-b outline-none focus:border-black"
        {...field}
        {...props}
      />
    </label>
  );
}
