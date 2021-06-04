import AppRoutes from "./AppRoutes";
import { Nav } from "components/Nav";

function App() {
  return (
    <div style={{ padding: "0 8rem" }}>
      <Nav />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
