import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import drumsPosition from "./redux/drumsPosition/reducer";
import gameStatus from "./redux/gameStatus/reducer";

const reducer = combineReducers({
  drumsPosition: drumsPosition,
  gameStatus: gameStatus,
});

const newStore = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={newStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
