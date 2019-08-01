import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/navigation";

import Devices from "./components/devices";
import Users from "./components/users";

import "./styles.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Devices} />
      <Route path="/Devices" component={Devices} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
