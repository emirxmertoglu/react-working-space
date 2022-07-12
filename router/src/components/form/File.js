import { useField } from "formik";
import { FiCheck } from "react-icons/fi";

export default function File({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  async function fileOpen() {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      helpers.setValue(file);
    } catch (error) {
      helpers.setValue("");
    }
  }

  return (
    <div className="block w-full">
      <div className="text-sm text-gray-600 mb-1.5">{label}</div>
      <button
        type="button"
        className="px-5 inline-flex items-center gap-x-2 rounded bg-blue-50 text-blue-500 h-10"
        onClick={fileOpen}
      >
        {field.value && (
          <>
            File chosen <FiCheck size={15} />
          </>
        )}
        {!field.value && "Choose a file"}
      </button>
      {field.value && (
        <button
          type="button"
          className="flex w-full text-sm text-bold underline mt-2"
          onClick={() => helpers.setValue("")}
        >
          Remove the file
        </button>
      )}
    </div>
  );
}
