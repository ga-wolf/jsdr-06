import React, { useState } from "react";

function SearchMovie() {
  let [title, setTitle] = useState("");

  function handleInput(event) {
    setTitle(event.target.value);
  }

  function searchForMovie() {
    console.log("Make an API request...");
  }

  return (
    <div>
      <h1>SEARCH!</h1>
      <input onInput={handleInput} type={"text"} value={title} />
      <button onClick={searchForMovie}>Search!</button>
    </div>
  );
}

export default SearchMovie;
