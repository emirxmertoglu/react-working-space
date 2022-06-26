import { useReducer, useState, useCallback, useMemo } from "react";
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
    search: "",
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

  const handleSearch = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredSearch = useMemo(() => {
    return state.todos.filter((todo) =>
      todo
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.todos, state.search]);

  return (
    <>
      <Header />
      <hr />
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <hr />
      <h1>Todo App</h1>
      <input
        type="text"
        value={state.search}
        placeholder="Search in todos"
        onChange={handleSearch}
      />
      {state.search}
      <hr />
      <AddTodo
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todo={state.todo}
      />
      <Todos todos={filteredSearch} />
    </>
  );
}

export default App;
