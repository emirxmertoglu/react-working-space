import { useSelector } from "react-redux";
import { handleOpen, handleDelete } from "../utils";

export default function TodoItem({ todo }) {
  const { user } = useSelector((state) => state.auth);

  const handleEdit = () => {
    handleOpen({
      name: "edit-todo",
      data: todo,
    });
  };

  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title} - {todo.user}
      </span>
      {todo.user === user.id && (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
