// Event Listener
// Target + Event Type + Callback

let paragraph = document.querySelector("p");

function handleParagraphClick() {
  console.log("The paragraph was clicked");
}

paragraph.addEventListener("click", handleParagraphClick);

// Find the input DOM Node
// When that input changes value
//   Get the current value
//   Set the page's background to be that value

let inputNode = document.querySelector("input");

function handleColorChange(event) {
  let color = event.target.value;
  document.body.style.background = color;
}

inputNode.addEventListener("change", handleColorChange);

// Target of the Event
let anchor = document.querySelector("a");

// Callback Function (Response)
function handleAnchorClick(event) {
  event.preventDefault();
  console.log("The link was clicked");
}

// Event Listener
anchor.addEventListener("click", handleAnchorClick);

let img = document.querySelector("img");

function handleRightClick(event) {
  event.preventDefault();
  console.log("The image was right clicked");
}

img.addEventListener("contextmenu", handleRightClick);

let form = document.querySelector("form");

function handleFormSubmit(event) {
  event.preventDefault(); // Stop the page refreshing
  let usernameNode = document.querySelector(".username");
  let passwordNode = document.querySelector(".password");
  console.log(usernameNode.value, passwordNode.value);
}

// The submit event will run:
// - If a input[type="submit"] is clicked
// - If a button is clicked
// - If someone presses enter in the last input
form.addEventListener("submit", handleFormSubmit);
