import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Routes from "./Routes";

import './utils/DefaultConfigiration';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
