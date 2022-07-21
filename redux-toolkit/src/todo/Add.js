import { nanoid } from "nanoid";
import { useState } from "react";

export default function AddTodo({ setTodos, user }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      {
        title: todo,
        done: false,
        id: nanoid(),
        user: user.id,
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
      <button disabled={!todo || !user} type="submit">
        Add
      </button>
    </form>
  );
}
