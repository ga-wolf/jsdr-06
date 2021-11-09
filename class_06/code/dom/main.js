// DOM Access Methods

// document.querySelector("CSS SELECTOR");
// Return the first matching DOM Node or null

let heading = document.querySelector("h1");
let list = document.querySelector("ul");
let button = document.querySelector("button");
let aTag = document.querySelector("a");

// document.querySelectorAll("CSS SELECTOR");
// Return a NodeList containing all matching DOM Nodes
// NodeList is very similar to an Array

let allParagraphs = document.querySelectorAll("p");
let listItems = document.querySelectorAll("li");

// Working with individual DOM Nodes

// Access the current text or HTML

// Using .innerHTML
console.log(heading.innerHTML);
console.log(button.innerHTML);

// Using .innerText
console.log(heading.innerText);
console.log(aTag.innerText);

// Get the current value of an attribute
// domNode.getAttribute("attrName");

let currentHref = aTag.getAttribute("href");
console.log(currentHref);

let script = document.querySelector("script");
let scriptSrc = script.getAttribute("src");

console.clear();

// Changing the innerText or innerHTML

heading.innerHTML = "This was changed by JS";

button.innerText = "CLICK ME!!";

let paragraph = document.querySelector("p");
console.log(paragraph.innerHTML);

paragraph.innerHTML = "This was <b>changed</b> by JS";

// Create a new variable called anchor
let anchor = document.querySelector("a");

// Change the innerHTML to be "A link to Google"
anchor.innerHTML = "A link to Google";

// Log the current HREF
let href = anchor.getAttribute("href");
console.log(href);

// Change the href attribute

anchor.setAttribute("href", "https://google.com");

// Get access to an input's value
let input = document.querySelector("input");

console.log(input.value);

// Update the input's value

input.value = "Written by JS";

// Access the current CSS

let mainHeading = document.querySelector("h1");
let headingStyles = getComputedStyle(mainHeading);

let currentFontSize = headingStyles.fontSize;
console.log(currentFontSize);

// Change the current CSS

heading.style.color = "blue";
heading.style.fontSize = "5px";

// Events in JavaScript
// 1. Target DOM Node
// 2. Event Type
// 3. Callback Function

let myButton = document.querySelector("button");

let eventType = "click";

function onClick() {
  console.log("The button was clicked");
}

// Creating an event listener (which binds those 3 things together)
myButton.addEventListener(eventType, onClick);
