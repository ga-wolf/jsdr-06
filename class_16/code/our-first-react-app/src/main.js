// Import all necessary dependencies
import React from "react";
import ReactDOM from "react-dom";

// Create our first component
// A component is a function that returns a *single* JSX element
function Hello(props) {
  let name = props.name;
  let favNumber = props.favNumber;
  let style = { color: props.color };

  function handleClick() {
    console.log(`You clicked ${name}!`);
  }

  return (
    <div style={style} onClick={handleClick}>
      <h3>Hello {name}</h3>
      <p>Your favourite number is {favNumber}</p>
    </div>
  );
}

// Rules of components:
// - They return a single JSX element
// - They are named with UpperCamelCase
function Course() {
  return <h2>JavaScript Development</h2>;
}

function App() {
  return (
    <div>
      <Hello name={"Tengku"} favNumber={42} color={"rebeccapurple"} />
      <Hello name={"Jiarui"} favNumber={6} color={"blue"} />
      <Hello name={"Nancy"} favNumber={7} color={"green"} />
    </div>
  );
}

let target = document.querySelector("#app");

// render receives two arguments:
// - The component to render
// - The DOM Element to put that component
ReactDOM.render(<App />, target);
