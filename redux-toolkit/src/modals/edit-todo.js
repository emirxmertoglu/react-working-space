import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../stores/todo";

export default function EditTodo({ data, close }) {
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );

    close();
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
      <button onClick={close}>Close</button>
    </div>
  );
}
