// // Logical Operators

// // AND &&

// let animalName = "Golden Eagle";
// let animalHabitat = "Ocean";

// // If the animal name is Orca and the animal habitat is the ocean
// //  Log I want to dive with that

// if (animalName === "Orca" || animalHabitat === "Ocean") {
//   console.log("I want to dive with that");
// }

// Fizzbuzz Example

// Log "Fizz" if the number is divisible by 3
// Log "Buzz" if the number is divisible by 5
// Log "Fizzbuzz" if the number is divisible by 3 and 5

// let num = 3;

// if (num % 15 === 0) {
//   console.log("Fizzbuzz");
// } else if (num % 5 === 0) {
//   console.log("Buzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// }

// Loop

// Starting Point - 1
// Ending Condition - <= 100
// Step - += 1

for (let num = 1; num <= 100; num += 1) {
  if (num % 15 === 0) {
    console.log("Fizzbuzz", num);
  } else if (num % 5 === 0) {
    console.log("Buzz", num);
  } else if (num % 3 === 0) {
    console.log("Fizz", num);
  }
}
