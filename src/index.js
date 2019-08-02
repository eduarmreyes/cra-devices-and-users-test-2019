import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/navigation";

import Devices from "./components/devices";
import Users from "./components/users";

import "./styles.css";

function reducer(state = { devices: [] }, action) {
  switch (action.type) {
    case "ADD_DEVICE":
      return {
        ...state,
        devices: [...action.payload, state.devices],
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route path="/" exact component={Devices} />
        <Route path="/Devices" component={Devices} />
        <Route path="/users" component={Users} />
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
