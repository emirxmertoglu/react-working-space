import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./todo/Header";
import AddTodo from "./todo/Add";
import TodoList from "./todo/List";
import Modal from "./todo/Modal";
import "./utils";

function App() {
  const { open: isModalOpen } = useSelector((state) => state.modal);

  const [language, setLanguage] = useState("tr");
  const [dark, setDark] = useState(true);

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
