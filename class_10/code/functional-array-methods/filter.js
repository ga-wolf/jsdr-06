/* ------------------------------------------------------------------------ */
/* .filter                                                                  */
/*                                                                          */
/* Used for filtering down an array by removing items based                 */
/*   on a predicate function (one that returns a boolean)                   */
/*                                                                          */
/* It will return a new array                                               */
/*                                                                          */
/* It receives a callback function that must return a boolean               */
/*   If the callback returns true, the item will be in the returned array   */
/*   If the callback returns false, the item won't be in the returned array */
/*                                                                          */
/* That callback will be run and provided with:                             */
/* - The current item                                                       */
/* - The index                                                              */
/* - The entire collection                                                  */
/* ------------------------------------------------------------------------ */

console.group(".filter");
console.group("Start of our first fake .filter version");

let numbers = [1, 2, 3, 4, 5];

// Our first version
let myEvenNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  let currentNumber = numbers[i];
  if (currentNumber % 2 === 0) {
    myEvenNumbers.push(currentNumber);
  }
}

console.log("Even Numbers:", myEvenNumbers);

console.groupEnd();
console.group("Start of our second fake .filter version");

// Our second version
let evenNumbers = [];

function isEven(currentNumber) {
  return currentNumber % 2 === 0;
}

for (let i = 0; i < numbers.length; i += 1) {
  let currentNumber = numbers[i];
  if (isEven(currentNumber)) {
    evenNumbers.push(currentNumber);
  }
}
console.log("Even Numbers:", evenNumbers);

console.groupEnd();
console.group("Start of .filter version");

// Using .filter
let evenNums = numbers.filter(isEven);
console.log("Even Numbers:", evenNums);

console.groupEnd();
console.groupEnd();

console.log("\n\n");
