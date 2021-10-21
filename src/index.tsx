import ReactDOM from "react-dom";

import ContextProvider from "contexts/Todo";
import App from "./App";
import "./global.css";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
