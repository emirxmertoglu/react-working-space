import { useField } from "formik";
import { FiCheck } from "react-icons/fi";
import classNames from "classnames";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <label className="flex items-center gap-x-2 text-sm cursor-pointer">
      <button
        type="button"
        onClick={() => helpers.setValue(!field.value)}
        className={classNames({
          "w-5 h-5 flex items-center justify-center border rounded transition-all": true,
          "border-gray-500 text-transparent": !field.value,
          "border-blue-600 bg-blue-600 text-white": field.value,
        })}
      >
        <FiCheck size={15} />
      </button>
      {label}
    </label>
  );
}
