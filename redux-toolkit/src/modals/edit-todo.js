import { useState } from "react";
import { handleEdit, handleClose } from "../utils";

export default function EditTodo({ data }) {
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEdit({
      id: data.id,
      title: todo,
      done,
    });

    handleClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />{" "}
        <br />
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
          />
          Mark as done
        </label>{" "}
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
