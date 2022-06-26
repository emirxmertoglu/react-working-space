import { useReducer } from "react";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.todo} onChange={handleChange} />
        <button disabled={!state.todo} type="submit">
          Add Todo
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
