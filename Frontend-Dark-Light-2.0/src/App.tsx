import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/reusable-components/ThemeContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
