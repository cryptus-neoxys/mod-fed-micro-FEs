import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
