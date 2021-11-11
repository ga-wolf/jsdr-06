// document.querySelector("CSS SELECTOR");
// - Return the first DOM Node or null

let heading = document.querySelector("h2");
let mainParagraph = document.querySelector("p#main");
let gaLink = document.querySelector(".ga");
let firstListItem = document.querySelector("li");

// document.querySelectorAll("CSS SELECTOR");
// - Return a NodeList with all matching DOM Nodes

let myHeading = document.querySelectorAll("h2");
let allListItems = document.querySelectorAll("li");

// WORKING WITH INDIVIDUAL DOM NODES

let anchor = document.querySelector("a");

let currentHref = anchor.getAttribute("href");
anchor.setAttribute("href", "https://google.com");
let newHref = anchor.getAttribute("href");

let h = document.querySelector("h2");

console.log(h.innerText);

h.innerText = "Something else";

// Append some text
h.innerText += "!!!!!";

// Prepend some text
h.innerText = "----" + h.innerText;

let input = document.querySelector("input");

// Access the current value
console.log(input.value);

input.value = "Done by JS";

// Set the styles

heading.style.color = "rebeccapurple";
heading.style.fontSize = "50px";
heading.style.textDecoration = "underline";

// Get the styles

let headingStyles = getComputedStyle(heading);
let currentFontSize = headingStyles.fontSize;

console.log(currentFontSize);
console.log(headingStyles.display);

// I want to change all of the list items on the page to be blue

let listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i += 1) {
  let currentListItem = listItems[i];
  currentListItem.innerHTML += " - changed by JS";
  currentListItem.style.color = "blue";
}

// We need to loop through all list items
//   Access the current list item DOM Node
//   Change the color to be blue

// Creating DOM Nodes

// Create the new element
let newParagraph = document.createElement("p");

// Update the element (the text, the style)
newParagraph.innerText = "This was created by JS";
newParagraph.style.fontSize = "42px";

// Put it on the page
document.body.appendChild(newParagraph);

// Create the element
let newItem = document.createElement("li");
// Update it
newItem.innerText = "Created by JS";
newItem.style.color = "red";

let unordered = document.querySelector("ul");
unordered.appendChild(newItem);
