import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { handleAdd } from "../utils";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({
      title: todo,
      done: false,
      id: nanoid(),
      user: user.id,
    });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write a todo"
      />
      <button disabled={!todo || !user} type="submit">
        Add
      </button>
    </form>
  );
}
