import { memo } from "react";

function TodoItem({ todo }) {
  console.log("TODOITEM rendered", todo);

  return <li>{todo}</li>;
}

export default memo(TodoItem);
