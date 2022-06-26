import { memo } from "react";
function AddTodo({ handleSubmit, todo, handleChange }) {
  console.log("ADDTODO rendered");

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleChange} />
      <button disabled={!todo} type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default memo(AddTodo);
