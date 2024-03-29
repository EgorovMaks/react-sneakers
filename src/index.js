import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./seting.scss";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <HashRouter hashType="hashbang">
        <App />
      </HashRouter>
    
  </React.StrictMode>
);
