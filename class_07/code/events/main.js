// Event Listener
// 1. Target DOM Node
// 2. Event Type
// 3. Callback Function

// When the button is clicked
//   Log to the console that the button was clicked

let button = document.querySelector("button");

function handleButtonClick() {
  console.log("The button was clicked");
}

// Listener = target + event type + callback

button.addEventListener("click", handleButtonClick);

let heading = document.querySelector("h1");

function onHeadingClick() {
  console.log("the heading was clicked");
}

heading.addEventListener("dblclick", onHeadingClick);

// When the mouse is moved over the img
//   Log the mouse is moving

let img = document.querySelector("img");
let currentSrc = img.getAttribute("src");

function handleImageMove() {
  console.log("The mouse is moving");
}

img.addEventListener("mousemove", handleImageMove);

// Do this later on
img.removeEventListener("mousemove", handleImageMove);

// Event Listeners
// window represents the browser itself

function handleResize() {
  console.log("The browser was resized");
}

window.addEventListener("resize", handleResize);

function handleScroll() {
  console.log("The user scrolled");
}

window.addEventListener("scroll", handleScroll);

// Any time the user moves their mouse in the browser
//   Log the mouse was moved

function windowMouseMove() {
  console.log("The mouse was moved");
}

window.addEventListener("mousemove", windowMouseMove);
