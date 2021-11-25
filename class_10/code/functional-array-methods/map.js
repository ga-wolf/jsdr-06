/* ----------------------------------------------------------------------- */
/* .map                                                                    */
/*                                                                         */
/* Used for transforming each item in an array                             */
/*   It will return a new array! It's not destructive                      */
/*                                                                         */
/* It receives a callback function that must return a boolean              */
/*   Whatever the callback returns will be added into the returned array   */
/*                                                                         */
/* That callback will be run and provided with:                            */
/* - The current item                                                      */
/* - The index                                                             */
/* - The entire collection                                                 */
/* ----------------------------------------------------------------------- */

console.group(".map");
console.group("Start of our first fake .map version");

// Convert these prices into Pounds
//   using the conversion rate of 1 AUD to 0.54 GBP

let australianPrices = [50, 100, 250, 25, 75];
let conversionRate = 0.54;

// Our first version
let myMappedArray = [];

for (let i = 0; i < australianPrices.length; i += 1) {
  let currentPrice = australianPrices[i];
  let currentPriceInPounds = currentPrice * conversionRate;
  myMappedArray.push(currentPriceInPounds);
}

console.log("Prices in Pounds:", myMappedArray);

console.groupEnd();

console.group("Start of our second fake .map version");

// Our second version
let mappedArray = [];

function convert(currentPrice) {
  let currentPriceInPounds = currentPrice * conversionRate;
  return currentPriceInPounds;
}

for (let i = 0; i < australianPrices.length; i += 1) {
  let currentPrice = australianPrices[i];
  let currentPriceInPounds = convert(currentPrice);
  mappedArray.push(currentPriceInPounds);
}

console.log("Prices in Pounds:", mappedArray);

console.groupEnd();

console.group("Start of .map version");

// Using .map
let mappedArr = australianPrices.map(convert);
console.log("Prices in Pounds:", mappedArr);

console.groupEnd();
console.groupEnd();

console.log("\n\n");
