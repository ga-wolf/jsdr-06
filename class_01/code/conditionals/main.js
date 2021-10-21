console.log("Hello");

// Comparison Operators
// Compare two values and return a boolean

// Less than
console.log(4 < 5); // true

// Less than or equals to
console.log(4 <= 5);
console.log(26 <= 25);

// Greater than
console.log(3 > 2); // true

// Greater than or equals to
console.log(25 >= 34);
console.log(12 >= 10);

// Loose Equality
// Uses type coercion!!
// (it'll try to turn the values into the same type)

console.log("hello" == "hello");
console.log(2 == "2"); // true (because of type coercion)

// Strict Equality
// No type coercion!!
console.log("a" === "a");
console.log(2 === "2"); // false (because it doesn't use type coercion)

console.clear();

// Loose Inequality (uses type coercion)
console.log(14 != 20);
console.log(10 != 10);
console.log(19 != "19");

// Strict Inequality (doesn't use type coercion)
console.log("hello" !== "hello");
console.log(19 !== "19");

console.clear();

if (2 === 2) {
  console.log("Math's is working");
}

let personName = "Leo";

if (personName === "Jack") {
  console.log("The Lead Instructor");
} else if (personName === "Stacey") {
  console.log("The IA");
} else {
  console.log("A student");
}

let num = 100;

if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}
