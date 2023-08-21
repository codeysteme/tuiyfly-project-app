import React from "react";
import ReactDOM from "react-dom/client";
import config from "react-global-configuration";
import App from "./App";

//Init configuration
config.set(require(`./config/config.json`)[process.env.NODE_ENV]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
