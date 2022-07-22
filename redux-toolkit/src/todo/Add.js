import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../stores/todo";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: todo,
        done: false,
        id: nanoid(),
        user: user.id,
      })
    );
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
