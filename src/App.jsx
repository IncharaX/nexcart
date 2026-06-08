import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <div style={{ flex: 1 }}>
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
