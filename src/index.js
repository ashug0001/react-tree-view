import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import { loadState, saveState } from "./localStore"; //eslint-disable-line
const StoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const localData = loadState();
// window.nodeid = localStorage.getItem("nodeid");
const store = createStore(
  reducer,
  // localData,
  StoreEnhancers(applyMiddleware(thunk))
);
// store.subscribe(() => {
//   saveState(store.getState());
// });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App id={"node_0"} />
  </Provider>,
  rootElement
);
