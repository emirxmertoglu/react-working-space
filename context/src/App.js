import { SiteProvider, AuthProvider } from "./context";
import Home from "./views/Home";

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
