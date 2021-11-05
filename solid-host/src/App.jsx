import { render } from "solid-js/web";

import counterWrapper from "remote/counterWrapper";

import "./index.scss";
import { onMount } from "solid-js";

const App = () => {
  let myDiv;
  onMount(() => counterWrapper(myDiv));
  return (
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: solid-host</div>
      <div ref={myDiv}></div>
    </div>
  );
};
render(App, document.getElementById("app"));
