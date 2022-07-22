import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../stores/todo";

export default function TodoItem({ todo, setModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setModal({
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
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}
