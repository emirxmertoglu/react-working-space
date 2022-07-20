import { nanoid } from "nanoid";
import { useState } from "react";

export default function AddTodo({ setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      {
        title: todo,
        done: false,
        id: nanoid(),
        user: 1, // !todo add the id of logged in user
      },
      ...todos,
    ]);
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
      <button disabled={!todo} type="submit">
        Add
      </button>
    </form>
  );
}
