import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { initTheme } from "./theme/useTheme";

initTheme(); // set data-theme before first paint

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
