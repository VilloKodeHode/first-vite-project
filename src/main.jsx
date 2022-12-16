// Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./styles/App.css";

// Components
import App from "./App.jsx";

// Setting up React
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //alternativt kan det stå slik:
  // const root = ReactDOM.createRoot(document.getElementById("root"));

  // root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
);
