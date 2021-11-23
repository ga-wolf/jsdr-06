let letters = ["A", "B", "C", "D", "E"];

// Iterative
for (let i = 0; i < letters.length; i += 1) {
  let currentLetter = letters[i];
  console.log(i, currentLetter);
}

// Declarative
// This function will receive 3 pieces of info:
// - Current Item
// - Index
// - Entire Collection (letters)
function logLetter(currentLetter, index) {
  console.log(index, currentLetter);
}

letters.forEach(logLetter);

// forEach
//    - method
//    - higher order (receives a callback)

// logLetter
//    - callback (provided to another function)

// .filter

let numbers = [1, 2, 3, 4, 5, 6];
console.clear();
function isEven(num) {
  let result = num % 2 === 0;
  // This is a predicate function
  // Because it always returns a boolean
  return result;
}

let isTwoEven = isEven(2);

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

let names = [
  "rob",
  "manijeh",
  "rich",
  "haden",
  "ben",
  "jiarui",
  "matt",
  "emma",
];

function filterNames(currentName) {
  let search = "r";
  let result = currentName.includes(search);
  return result;
}

let namesStartingWithR = names.filter(filterNames);
console.log(namesStartingWithR);

console.clear();

console.log(letters);

// At the moment, all the letters are uppercased
// We want to create a new array of lowercased letters

function lowercase(letter) {
  let result = letter.toLowerCase();
  return result;
}

let lowercasedLetters = letters.map(lowercase);
console.log(lowercasedLetters);

// forEach - performs something for each item
// filter - remove some items based on a callback
// map - translate each item

function capitalize(str) {
  // Uppercase the first character
  let first = str[0].toUpperCase();
  // Gets the rest of the name
  let rest = str.substring(1);
  // Combines the uppercase first letter and the rest of the name
  let capitalizedName = first + rest;
  return capitalizedName;
}

console.clear();

let scores = [0.5, 0.88, 0.91, 0.51, 0.64];

function toPercentage(number) {
  let res = number * 100;
  return res + "%";
}

let percentages = scores.map(toPercentage);
console.log(percentages);

let todos = ["Learn .forEach", "Learn .filter", "Learn .map", "Learn .reduce"];

function toListItem(task) {
  // Translate each item into a DOM node to then be appended
  let li = document.createElement("li");
  li.innerText = task;
  return li;
}

let list = document.querySelector("ul");
let todoDomNodes = todos.map(toListItem);

function appendToList(node) {
  list.appendChild(node);
}

todoDomNodes.forEach(appendToList);

console.clear();

let nums = [1, 2, 3, 4, 5];

function addNumbersTogether(runningTotal, currentNumber) {
  let res = runningTotal + currentNumber;
  let str = `
    Running Total: ${runningTotal}.
    Current Number: ${currentNumber}.
    Next Running Total: ${res}.
  `;
  return res;
}

let total = nums.reduce(addNumbersTogether, 0);
console.log(total);

// We want to find out the average test score

let testScores = [84, 86, 67, 78, 91, 100];

// Add all of the items together (using .reduce)
function addTogether(total, currentNumber) {
  let str = `
    Total: ${total}.
    Current Number: ${currentNumber}.
  `;
  console.log(str);
  // Whatever the return value is
  // The total will be set to that for the next iteration
  return total + currentNumber;
}

let totalScore = testScores.reduce(addTogether, 0);
console.log(totalScore);

// Divide the total by the number of scores

let myLetters = ["a", "b", "c", "d", "e"];

// Recreate join
function concatenate(total, currentLetter) {
  console.log(`Total: ${total}. Current Letter: ${currentLetter}`);
  return total + currentLetter;
}

let joinedLetters = myLetters.reduce(concatenate, "");
console.log(joinedLetters);
