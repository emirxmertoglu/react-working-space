import { createElement } from "react";
import "./styles.scss";

function App() {
  const todos = ["todo1", "todo2", "todo3"];
  /*const Button = (props) => {
    return <button>{props.text}</button>;
  };*/

  /*const ul = createElement(
    "ul",
    { className: "todo-list" },
    todos.map((todo) => createElement("li", { className: "todo" }, todo))
  );

  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    ul
  );*/

  return (
    <main className="test" id="main">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </main>
  ); // this is the same as the code above

  // return <Button text="merhaba dunya" />;
}

export default App;
