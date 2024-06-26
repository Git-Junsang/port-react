import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss"
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <BrowserRouter basename='/proxy/3000'>
        <App />
      </BrowserRouter>
    </React.StrictMode>
);