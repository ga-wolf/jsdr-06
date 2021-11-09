function add(x, y = 0) {
  let result = x + y;
  return result;
}

let res = add(5, 10); // Call-site

// Scope and Hoisting
// JS uses lexical scope
// Two types of scoping
//  - Function Scope (var uses this)
//  - Block Scope (let and const use this)

// if (false) {
//   let test = true;
// }

// console.log(test);

// console.log(anotherTest);
// TEMPORAL DEAD ZONE
const anotherTest = true;

// let and const prevent redeclarations
let reallyImportant = true;
// let reallyImportant = false;

// console.log(reallyImportant);

// let global = "GLOBAL";

// function newScope() {
//   let local = "LOCAL";

//   if (true) {
//     let superLocal = "SUPER LOCAL";
//   }

//   console.log(superLocal);
// }

// newScope();

for (let i = 1; i <= 5; i += 1) {
  // console.log(i);
}

// console.log(i);

console.clear();

let explorer = {
  name: "Jacques Cousteau",
  sayHello: function () {
    console.log("I was called");
  },
  age: add(10, 5),
};

explorer.sayHello();
console.log(explorer);
