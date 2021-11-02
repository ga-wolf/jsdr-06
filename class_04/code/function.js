function sayHello() {
  console.log("Hello");
}

sayHello(); // Call-site

function badAdd() {
  console.log(2 + 2);
}

badAdd();
badAdd();

function saveGame() {
  console.log("The game is saving...");
}

saveGame(); // Call-site (execute the function)

// const speak = function () {
//   console.log("I am a function expression");
// };

// speak();

// const arrow = () => {
//   console.log("I am an arrow function");
// };

// arrow();

console.clear();

// Function Declaration
// - Give a function a name
// - Describe the function's signature
//   - What parameters are going to be received?
function greet(name) {
  let msg = "Hello " + name;
  console.log(msg);
}

// Function Call-site
// - Provide arguments
greet("Angela");
greet("Manijeh");

function add(numOne, numTwo) {
  let result = numOne + numTwo;
  console.log(result);
}

add(10, 15);
add(20, 5122);

let letters = ["a", "b", "c"];

function logEachItem(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let item = arr[i];
    console.log(item);
  }
}

logEachItem(letters); // argument
logEachItem([1, 2, 3]);
logEachItem(["first", "second", "third"]);

console.clear();

function square(num) {
  let result = num * num;
  return result;
}

console.log(square(5) + 10);

function logIn(username, password) {
  let correctUsername = "matt";
  let correctPassword = "chicken";
  if (correctUsername === username && correctPassword === password) {
    return true;
  } else {
    return false;
  }
}

let isLoggedIn = logIn("matt", "chick;lam;lsam;alsen");
if (isLoggedIn) {
  console.log("You are logged in now");
} else {
  console.log("Incorrect details");
}

console.clear();

function isUsernameAvailable(username) {
  let allUsernames = ["rob", "haden", "glen"];
  let available = !allUsernames.includes(username);
  return available;
}

let username = prompt("What is your username?");

if (isUsernameAvailable(username) === true) {
  alert("You can sign up!");
} else {
  alert("Sorry, that username is already taken");
}

function logRegularly() {
  console.log("This is actually annoying");
}

setInterval(logRegularly, 100);
