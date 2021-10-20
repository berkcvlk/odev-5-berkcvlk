import React from "react";
import ReactDOM from "react-dom";

import ContextProvider from "contexts/todoContext";
import App from "./App";
import "./global.css";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
