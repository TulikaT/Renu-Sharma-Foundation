import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./app.js";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
