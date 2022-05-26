import logo from "./logo.svg";
import MyComponent from "./MyComponent";
import styles from "./App.module.css";
import { Title } from "./Title";
import MyNav from "./MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyNav2 from "./MyNav2";
import "./styles.scss";

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

      <MyNav2 />

      <h1 className="text-3xl font-bold">Hello world!</h1>

      <div className="myDiv">
        <p className="p-test">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          laborum nisi mollitia. Distinctio, veniam. Officiis fuga, dignissimos
          dicta dolore hic labore! Dolorum provident alias explicabo tempora
          sit, aliquam sunt ipsum?
        </p>
      </div>
    </>
  );
}

export default App;
