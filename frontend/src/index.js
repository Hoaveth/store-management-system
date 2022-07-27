import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import setupStore from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { injectStore } from "./utils/apiService";

injectStore(setupStore());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
