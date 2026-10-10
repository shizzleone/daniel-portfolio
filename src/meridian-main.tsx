import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MeridianApp from "./MeridianApp";
import "./meridian.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MeridianApp />
  </StrictMode>,
);
