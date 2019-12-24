import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { BrowserRouter } from "react-router-dom";
//import App from "./App";
//import { ProdcutProvider } from "./context";
import Counter from "./redux/counter/Counter";
import store from "./redux/store";
import { Provider } from "react-redux";
//import Ref from "./component/Ref";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
