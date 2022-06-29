import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      {user && (
        <div style={{ padding: 10, margin: 5, border: "1px solid red" }}>
          Only logged-in users can see this field
        </div>
      )}
      <Footer />
    </>
  );
}
