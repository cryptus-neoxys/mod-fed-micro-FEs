import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import "./index.scss";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: remote</div>
      <Counter />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
