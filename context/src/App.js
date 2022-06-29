import SiteProvider from "./context/SiteContext";
import Home from "./views/Home";

function App() {
  return (
    <SiteProvider>
      <Home />
    </SiteProvider>
  );
}

export default App;
