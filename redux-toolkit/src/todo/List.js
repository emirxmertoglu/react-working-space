import TodoItem from "./Item";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </ul>
  );
}
