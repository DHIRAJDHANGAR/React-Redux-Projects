import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./ShoppingApp/Navigation";
import { Provider } from "react-redux";
import { store } from "./ShoppingApp/store";
import StopWatch from "./StopWatch/StopWatch";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Provider store={store}> */}
    {/* <Navigation /> */}
    {/* </Provider> */}
    <StopWatch />
  </React.StrictMode>
);
