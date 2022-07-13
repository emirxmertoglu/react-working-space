import { useField } from "formik";

export default function Input({
  label,
  options,
  getOriginal = false,
  ...props
}) {
  const [field, meta, helpers] = useField(props);

  const handleChange = (e) => {
    let selected;
    if (props.multiple) {
      const multiple = [...e.target.selectedOptions].map((o) => o.value);
      selected = options.filter((option) => multiple.includes(option.key));
    } else {
      selected = options.find((option) => option.key === +e.target.value);
    }
    helpers.setValue(getOriginal ? selected : +e.target.value);
  };

  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600 mb-1.5">{label}</div>
      <select
        className="w-full h-30 border-b outline-none focus:border-black"
        defaultValue={field.value}
        onChange={handleChange}
        {...props}
      >
        {options.map((option, key) => (
          <option value={option.key} key={key}>
            {option.value}
          </option>
        ))}
      </select>
    </label>
  );
}
