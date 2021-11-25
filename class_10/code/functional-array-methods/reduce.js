/* -------------------------------------------------------------------------- */
/* .reduce                                                                    */
/*                                                                            */
/* Used to turn (reduce) an array into a single value                         */
/*   It will return that single value                                         */
/*                                                                            */
/* It receives a callback function that must return a value                   */
/*   That value will be set as the new running total for the next iteration   */
/* It also receives a starting value                                          */
/*   That value will be set to the running total for the first iteration      */
/*                                                                            */
/* That callback will be run and provided with:                               */
/* - The running total                                                        */
/* - The current item                                                         */
/* - The index                                                                */
/* - The entire collection                                                    */
/* -------------------------------------------------------------------------- */

console.group(".reduce");
console.group("Start of our first fake .reduce version");

let ourNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Our first version

let myTotal = 0;

for (let i = 0; i < ourNumbers.length; i += 1) {
  let currentNumber = ourNumbers[i];
  myTotal += currentNumber;
}

console.log("Sum:", myTotal);
console.groupEnd();

console.group("Start of our second fake .reduce version");

// Our second version

let currentTotal = 0;

function add(currentTotal, currentNumber) {
  return currentTotal + currentNumber;
}

for (let i = 0; i < ourNumbers.length; i += 1) {
  let currentNumber = ourNumbers[i];
  currentTotal = add(currentTotal, currentNumber);
}

console.log("Sum:", currentTotal);
console.groupEnd();

console.group("Start of .reduce version");

// Using .reduce

let total = ourNumbers.reduce(add, 0);
console.log("Sum:", total);

console.groupEnd();
console.groupEnd();
