import { useState } from "react";
import Test from "./components/Test";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <Test />}
    </>
  );
}

export default App;
