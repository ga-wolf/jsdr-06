// Event Listeners
// 1. Target
// 2. Event Type
// 3. Callback Function

// When the heading is right-clicked
//   Log out the "Heading was right-clicked"

let heading = document.querySelector("h1");

function handleRightClick() {
  console.log("The heading was right-clicked");
}

heading.addEventListener("contextmenu", handleRightClick);

// When the button is clicked
//   Select the paragraph with the class of clickCount
//   Change the text to reflect how many times we have clicked

let button = document.querySelector("button");
let numClicks = 0;
let paragraph = document.querySelector(".clickCount");

// Function Declaration
function onButtonClick() {
  numClicks += 1;
  paragraph.innerHTML = "You have clicked " + numClicks + " times";
}

button.addEventListener("click", onButtonClick);

let allListItems = document.querySelectorAll("li");

function onListItemClick(details) {
  details.target.style.color = "lime";
}

for (let i = 0; i < allListItems.length; i += 1) {
  let currentListItem = allListItems[i];
  currentListItem.addEventListener("click", onListItemClick);
}

let input = document.querySelector("input");

function handleTyping(e) {
  console.log("You typed " + e.key);
}

input.addEventListener("keyup", handleTyping);

let xHeading = document.querySelector("h2.x");
let yHeading = document.querySelector("h2.y");

function onMouseMove(info) {
  xHeading.innerText = "X: " + info.clientX;
  yHeading.innerText = "Y: " + info.clientY;
}

window.addEventListener("mousemove", onMouseMove);
