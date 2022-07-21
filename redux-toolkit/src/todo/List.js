import TodoItem from "./Item";

export default function TodoList({ todos, setTodos, user, setModal }) {
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem
          key={key}
          todo={todo}
          setTodos={setTodos}
          user={user}
          setModal={setModal}
        />
      ))}
    </ul>
  );
}
