import React, { useState } from "react";

// There are two types of data:
// - Props (immutable data passed into a component)
// - State (mutable and it is local to a component)

// useState is a React hook that we need to import
// When we call it, we provide an initial value
// It will return an array with two things:
// - The current value
// - An updater function
//     (when we call this the component will rerender)

function ClickCounter() {
  let [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;
