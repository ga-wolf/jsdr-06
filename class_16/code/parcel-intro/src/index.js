import React from "react";
import { render } from "react-dom";

function Hello({ name }) {
  function handleClick() {
    console.log("This happened");
  }
  return <h1 onClick={handleClick}>Hello {name}!</h1>;
}

render(
  <div>
    <Hello name="Wolf" />
    <Hello name="Jack" />
    <Hello name="Maddi" />
    <Hello name="Elke" />
    <Hello name="Felix" />
  </div>,
  document.querySelector("#app"),
);

console.log("THIS RAN!");
