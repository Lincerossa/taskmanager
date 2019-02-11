import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./redux";

const store = createStore(reducer, composeWithDevTools());

export default () => (
  <Provider store={store}>
    <div>APP</div>
  </Provider>
);
