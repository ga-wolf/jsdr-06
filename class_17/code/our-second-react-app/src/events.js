import React from "react";

function Events() {
  function onHeadingClick() {
    console.log("The heading was clicked");
  }

  function onDoubleClick() {
    console.log("Double clicked");
  }

  function handleMouseMove() {
    console.log("The mouse is moving");
  }

  return (
    <div>
      <h1 onClick={onHeadingClick}>EVENTS</h1>
      <h2 onDoubleClick={onDoubleClick}>Double Click Me</h2>
      <p onMouseMove={handleMouseMove}>Move the mouse over me!</p>
    </div>
  );
}

export default Events;
