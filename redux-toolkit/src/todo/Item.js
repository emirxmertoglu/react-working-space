export default function TodoItem({ todo, setTodos, user, setModal }) {
  const handleDelete = () => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
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
