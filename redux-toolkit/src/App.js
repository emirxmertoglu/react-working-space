import { useState } from "react";
import Header from "./todo/Header";
import AddTodo from "./todo/Add";
import TodoList from "./todo/List";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState("tr");
  const [dark, setDark] = useState(true);

  return (
    <main>
      <Header user={user} setUser={setUser} />
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
