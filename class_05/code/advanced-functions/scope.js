// function runMe() {
//   console.log("Hi there");
// }
// runMe();

// let global = "I AM A BLOCK SCOPED GLOBAL VARIABLE";

// function innerScope() {
//   let local = "I AM A LOCAL VARIABLE";

//   function innerInnerScope() {
//     let evenMoreLocal = "I AM ALSO A LOCAL VARIABLE";
//     console.log(global);
//   }

//   innerInnerScope();
// }

// innerScope();
// // innerInnerScope();

// if (true) {
//   let local = "I AM A LOCAL VARIABLE";
// }

// console.log(local);

// Log something to the console every time the button is clicked

// Find the button in the DOM
let button = document.querySelector("button");

// Creating the callback function
function onClick() {
  console.log("The button was clicked!");
}

// Create your event listener
button.addEventListener("click", onClick);

// Install the extension
// CMND + SHIFT + P on Mac
//   - Searched for Format Document With...
//   - Selected Prettier - Code Formatter
// CMND + ,
//   - Searched for Format on Save
//   - Ticked that box
