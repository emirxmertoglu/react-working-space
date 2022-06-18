import { useEffect, useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
  });

  useEffect(() => {
    console.log("count changed", count);
  }, [count]);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <hr />
      <div
        style={{
          fontSize: 30,
          fontFamily: "sans-serif",
          color: "crimson",
          fontWeight: 600,
          marginTop: 20,
        }}
      >
        Test
      </div>
    </>
  );
}

export default Test;
