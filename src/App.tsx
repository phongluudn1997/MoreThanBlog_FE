import AppRoutes from "./AppRoutes";
import { Nav } from "components/Nav";

function App() {
  return (
    <div style={{ padding: "0 80px" }}>
      <Nav />
      <main>
        <AppRoutes />
      </main>
      <div
        dangerouslySetInnerHTML={{
          __html: `<h1 class="text-yellow-500">Test</h1>`,
        }}
      ></div>
    </div>
  );
}

export default App;
