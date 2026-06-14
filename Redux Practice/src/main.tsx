import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/ReduxStore.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // ✅ ADD THIS

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        {/* ✅ WRAP HERE */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
