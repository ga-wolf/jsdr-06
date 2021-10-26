// Array is:
//  Structural
//  Ordered
//  Access is done using a zero-based index

let emptyArr = [];

let random = ["", 1, false, null];

let letters = ["a", "b", "c", "d", "e"];

// Accessing Items
// zero-based index (the first item is index 0)

let letterA = letters[0];
let letterD = letters[3];
let whatHappens = letters[10];

console.log(letterA, letterD);
console.log(whatHappens);

const instruments = [
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone",
];

// Reassign Values
instruments[1] = "Roli Seaboard";

// I want to change "Pyrophone" to "OP1"
instruments[5] = "OP1";

let lastItem = instruments[instruments.length - 1];
console.log(lastItem);

const ordinals = ["Zeroeth", "First", "Second", "Third"];

// Loop || Iterate through the ordinals array
//
// Starting Point: 0
// Ending Condition: < 4
// Step || Increment: += 1

for (let i = 0; i < 4; i += 1) {
  let value = ordinals[i];
  console.log(value);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4

let str = "";

for (let i = 1; i <= 4; i += 1) {
  str += i;
  console.log(str);
}
