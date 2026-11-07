import React from "react";
import ReactDOM from "react-dom/client";
import BlueWaveApp from "./BlueWaveApp";
import "./bluewave.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BlueWaveApp />
    </React.StrictMode>
  );
}
