// How could we determine if a given programming language is a front-end programming language?

let language = "Rust";

if (language === "HTML" || language === "CSS" || language === "JS") {
  console.log("It is front end");
} else {
  console.log("It is likely back end");
}

// If language is HTML or CSS or JS, its front end
// Otherwise (else), its probably a back end

let personName = "Suguna";

if (personName === "Stacey" || personName === "Jack") {
  console.log("Teacher!");
} else {
  console.log("Student!");
}

console.clear();

let userIsLoggedIn = true;
let userIsAdmin = true;

if (userIsLoggedIn && userIsAdmin) {
  console.log("You can do anything!");
}

console.clear();

let hasAccount = false;

// If they don't have an account
//   Tell them to sign up
// Otherwise
//   Tell them to log in

if (!hasAccount) {
  console.log("You should sign up");
} else {
  console.log("You should log in");
}

console.clear();

// We want to teach JS to count from 1 to 10

// What is the starting point?
//    1
// What is the ending condition?
//    10
// How do we get from the start to the end (step || increment)?
//    + 1

// let count = 1;

// while (count <= 10) {
//   console.log(count);
//   count = count + 1;
// }

// Starting Point
//   5
// Ending Condition
//   >= 1
// Step || Increment
//   - 1

// let index = 5;

// while (index >= 1) {
//   console.log(index);
//   index -= 1;
//   // index = index - 1; // You'll likely see this as the last line
// }

// Syntactic Sugar - shorthand to do a common task
// These are all the same
// num = num + 1;
// num += 1;
// num++; // Adds 1 every time

// I want to print the even numbers from 1 to 10 (2, 4, 6, 8, 10)

// Starting Point?
//    1
// Ending Condition?
//    <= 10
// Step || Increment?
//    + 1

// let i = 2;

// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// We want to count from 1 to 5
// Starting point: 0
// Ending condition: <= 5
// Increment: += 1

// for (START; END; STEP) {}
// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// Count from 42 to 37
// Starting point: 42
// Ending condition: >= 37
// Step || increment: -= 1

for (let count = 42; count >= 37; count -= 1) {
  console.log(count);
}
