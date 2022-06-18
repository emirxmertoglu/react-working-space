import { useEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
  });

  return (
    <div
      style={{
        fontSize: 20,
        fontFamily: "sans-serif",
        color: "crimson",
        fontWeight: 600,
      }}
    >
      Test
    </div>
  );
}

export default Test;
