import classNames from "classnames";

function Button({ text, variant = "default" }) {
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded mb-2 hover:bg-sky-600": true,
        "bg-gray-300": variant === "default",
        "bg-green-600 text-white": variant === "success",
        "bg-red-600 text-white": variant === "danger",
        "bg-yellow-300 text-black": variant === "warning",
      })}
    >
      {text}
    </button>
  );
}

export default Button;
