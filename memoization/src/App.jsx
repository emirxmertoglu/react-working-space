import { useReducer, useState, useCallback } from "react";
import todoReducer from "./reducers/todoReducer";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  console.log("APP rendered");

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
  });

  const handleChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <hr />
      <h1>Todo App</h1>
      <AddTodo
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todo={state.todo}
      />
      <Todos todos={state.todos} />
    </>
  );
}

export default App;
