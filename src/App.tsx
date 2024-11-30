import AppShellLayout from "./layouts/AppShellLayout";
import TodoKeeper from "./pages";
import "./App.css";

function App() {
  return (
    <AppShellLayout>
      <TodoKeeper />
    </AppShellLayout>
  );
}

export default App;
