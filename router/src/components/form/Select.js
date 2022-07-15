import { useField, ErrorMessage } from "formik";
import classNames from "classnames";

export default function Input({
  label,
  options,
  getOriginal = false,
  ...props
}) {
  const [field, meta, helpers] = useField(props);

  const handleChange = async (e) => {
    let selected;
    if (props.multiple) {
      const multiple = [...e.target.selectedOptions].map((o) => o.value);
      selected = options.filter((option) => multiple.includes(option.key));
    } else {
      selected = options.find((option) => option.key === +e.target.value);
    }
    await helpers.setValue(getOriginal ? selected : e.target.value);
    await helpers.setTouched(true);
    if (selected) {
      helpers.setError(undefined);
    }
  };

  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600 mb-1.5">{label}</div>
      <select
        className={classNames({
          "w-full border-b outline-none": true,
          "h-10": !props.multiple,
          "focus:border-black": !meta.error || !meta.touched,
          "border-red-600": meta.error && meta.touched,
        })}
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
      <ErrorMessage
        name={field.name}
        component="small"
        className="mt-2 block text-xs text-red-600"
      />
    </label>
  );
}
