import logo from "./logo.svg";

function App() {
  return (
    <div>
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>
      {process.env.NODE_ENV === "production" && (
        <>
          <span>{process.env.NODE_ENV} ortamindayiz</span>
          <img src={logo} alt="logo" width="250" />
        </>
      )}
    </div>
  );
}

export default App;
