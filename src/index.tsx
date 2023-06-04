import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeConfig } from "./config/theme.config";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext/auth.provider";
import { API_DEFAULT_URL } from "./config";
console.log("🚀 ~ file: index.tsx:11 ~ API_DEFAULT_URL:", API_DEFAULT_URL);

/** declaring default url for NODE_ENV */
axios.defaults.baseURL = API_DEFAULT_URL;

const root = ReactDOM.createRoot(
  document.getElementById("root1") as HTMLElement
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
