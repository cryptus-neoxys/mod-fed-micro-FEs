import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import "./index.scss";

export default (el: HTMLElement) => {
  ReactDOM.render(<Counter />, el);
};
