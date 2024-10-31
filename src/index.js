//src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { AppProvider } from "./context/AppContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);

// Mide el rendimiento de la aplicación
reportWebVitals();
