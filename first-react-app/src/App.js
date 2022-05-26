import logo from "./logo.svg";
import MyComponent from "./MyComponent";
import styles from "./App.module.css";
import { Title } from "./Title";
import MyNav from "./MyNav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className={styles.test}>
        <h3>{process.env.NODE_ENV}</h3>
        <p>{process.env.REACT_APP_API_URL}</p>
        {process.env.NODE_ENV === "production" && (
          <>
            <span>{process.env.NODE_ENV} ortamindayiz</span>
            <img src={logo} alt="logo" width="250" />
          </>
        )}
      </div>

      <MyComponent />

      <Title>Lorem, ipsum dolor.</Title>
      <Title theme="dark">Lorem, ipsum dolor.</Title>

      <MyNav />
    </>
  );
}

export default App;
