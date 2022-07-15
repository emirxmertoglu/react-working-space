import { useField } from "formik";
import classNames from "classnames";

export default function Checkbox({ label, options, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="grid gap-y-2">
      <div className="text-sm text-gray-600 mb-1.5">{label}</div>

      {options.map((option, key) => (
        <label
          className="flex items-center gap-x-2 text-sm cursor-pointer"
          key={key}
        >
          <button
            type="button"
            onClick={() => helpers.setValue(option.key)}
            className={classNames({
              "w-5 h-5 flex items-center justify-center border rounded-full transition-all": true,
              "border-gray-300": field.value !== option.key,
              "border-blue-600": field.value === option.key,
            })}
          >
            <div
              className={classNames({
                "w-3 h-3 rounded-full": true,
                "bg-blue-600": field.value === option.key,
              })}
            ></div>
          </button>
          {option.value}
        </label>
      ))}
    </div>
  );
}
