import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeConfig } from "./config/theme.config";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext/auth.provider";

const { API_HOST } = process.env;
axios.defaults.baseURL = API_HOST || "http://localhost:3100";
// axios.defaults.baseURL = "http://localhost:3100";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
