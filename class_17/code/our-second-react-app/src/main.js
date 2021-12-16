import React from "react";
import ReactDOM from "react-dom";
import Student from "./student";
import About from "./about";
import Events from "./events";
import SearchMovie from "./searchMovie";
import ClickCounter from "./clickCounter";
import LoginForm from "./loginForm";

function App() {
  return (
    <div>
      <h1>Our React App!</h1>
      <SearchMovie />
      <hr />
      <ClickCounter />
      <hr />
      <LoginForm />
    </div>
  );
}

let targetElement = document.querySelector("#app");
ReactDOM.render(<App />, targetElement);
