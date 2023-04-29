import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeConfig } from "./config/theme.config";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

const { REACT_APP_HOST } = process.env;
// axios.defaults.baseURL = REACT_APP_HOST || "http://localhost:3001";
axios.defaults.baseURL = "http://localhost:3041";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
