// Every time the user types in the input
//  Check whether the text contains the "@" character
//   If it does, change the border to "green"
//   If it doesn't, change the border to "red"

// Target DOM Node
let inputNode = document.querySelector("input");

// Callback Function
function handleTyping(event) {
  let currentlyTyped = event.target.value;
  let isValidEmail = currentlyTyped.includes("@");
  if (isValidEmail) {
    event.target.style.borderColor = "green";
  } else {
    event.target.style.borderColor = "red";
  }
}

// Event Listener
inputNode.addEventListener("input", handleTyping);

let width = 100; // Starting Point
let img = document.querySelector("img"); // Target DOM Node

// Set the initial state
img.style.width = width + "px";

function animateImage() {
  width += 2; // Increment the width
  img.style.width = width + "px"; // Update the DOM Node
  if (width < 600) {
    // Call animateImage after 20ms
    setTimeout(animateImage, 20);
  }
}

animateImage();
