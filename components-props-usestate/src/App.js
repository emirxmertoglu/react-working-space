import Button from "./components/Button";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Button text="Button #1" />
      <Button text="Button #2" variant="success" />
      <Button text="Button #3" variant="danger" />
      <Button text="Button #4" variant="warning" />
    </div>
  );
}

export default App;
