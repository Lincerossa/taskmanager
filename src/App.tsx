import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./redux";

import Example from "./components/Example";

const store = createStore(reducer, composeWithDevTools());

export default () => (
  <Provider store={store}>
    <Example />
  </Provider>
);
