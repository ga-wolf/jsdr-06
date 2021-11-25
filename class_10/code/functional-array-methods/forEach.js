/* -------------------------------------------- */
/* .forEach                                     */
/*                                              */
/* Used for running a task for each item        */
/*                                              */
/* It receives a callback function              */
/*                                              */
/* That callback will be run and provided with: */
/* - The current item                           */
/* - The index                                  */
/* - The entire collection                      */
/* -------------------------------------------- */

let letters = ["a", "b", "c", "d", "e"];

console.group(".forEach");
console.group("Start of our first fake .forEach version");

// Our first version
for (let i = 0; i < letters.length; i += 1) {
  let currentItem = letters[i];
  console.log(currentItem, i);
}

console.groupEnd();
console.group("Start of our second fake .forEach version");

// Our second version
function logLetter(currentItem, i) {
  console.log(currentItem, i);
}

for (let i = 0; i < letters.length; i += 1) {
  logLetter(letters[i], i);
}

console.groupEnd();
console.group("Start of .forEach version");

// Using .forEach
letters.forEach(logLetter);

console.groupEnd();
console.groupEnd();

console.log("\n\n");
