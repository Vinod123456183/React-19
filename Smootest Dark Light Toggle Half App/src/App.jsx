import React from "react";
import { ThemeProvider } from "./components/contexts/ThemeContext"; // Adjust path as necessary
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
 
