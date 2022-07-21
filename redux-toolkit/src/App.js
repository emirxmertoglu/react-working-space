import { useState } from "react";
import Header from "./todo/Header";
import AddTodo from "./todo/Add";
import TodoList from "./todo/List";
import Modal from "./todo/Modal";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState("tr");
  const [dark, setDark] = useState(true);
  const [modal, setModal] = useState(false);

  const close = () => setModal(false);

  return (
    <main>
      {modal && <Modal close={close} name={modal.name} data={modal.data} />}
      <Header user={user} setUser={setUser} />
      <AddTodo setTodos={setTodos} user={user} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        user={user}
        setModal={setModal}
      />
    </main>
  );
}

export default App;
