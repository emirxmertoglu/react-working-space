import { useField, ErrorMessage } from "formik";
import { FiCheck } from "react-icons/fi";
import classNames from "classnames";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <label className="flex items-center gap-x-2 text-sm cursor-pointer">
        <button
          type="button"
          onClick={async () => {
            await helpers.setValue(!field.value);
            if (field.value) {
              helpers.setError(undefined);
            }
            await helpers.setTouched(true);
          }}
          className={classNames({
            "w-5 h-5 flex items-center justify-center border rounded transition-all": true,
            "border-gray-500 text-transparent": !field.value,
            "border-red-600": !field.value && (meta.error || meta.touched),
            "border-blue-600 bg-blue-600 text-white": field.value,
          })}
        >
          <FiCheck size={15} />
        </button>
        {label}
      </label>
      <ErrorMessage
        name={field.name}
        component="small"
        className="mt-2 block text-xs text-red-600"
      />
    </div>
  );
}
