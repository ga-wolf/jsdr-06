// forEach

// Print out each letter and its index

let letters = "abcdef".split("");

// let letterA = letters[0];
// let letterB = letters[1];

// let [letterA, letterB] = letters;

// console.log(letterA, letterB);

// for (let i = 0; i < letters.length; i += 1) {
//   let currentLetter = letters[i];
//   console.log(currentLetter, i);
// }

function logLetter(currentLetter, index) {
  console.log(currentLetter, index);
}

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    callback(arr[i], i);
  }
}

forEach(letters, logLetter);

forEach([1, 2, 3], function (currentNumber, index) {
  console.log(currentNumber);
});

// for (let i = 0; i < letters.length; i += 1) {
//   logLetter(letters[i], i);
// }

// letters.forEach(logLetter);

// let glen = {
//   firstName: "Glen",
//   lastName: "Harry",
// };

// let firstName = glen.firstName;
// let lastName = glen.lastName;
// Object Destructuring

// let { firstName, lastName } = glen;

// console.log(firstName, lastName);

console.clear();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Task: Have an array of only even numbers

let evenNums = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   let currentNumber = numbers[i];
//   let isEven = currentNumber % 2 === 0;
//   if (isEven) {
//     evenNums.push(currentNumber);
//   }
// }

// console.log(evenNums);

let myEvenNumbers = [];

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 0; i < numbers.length; i += 1) {
  let currentNumber = numbers[i];
  if (isEven(currentNumber)) {
    myEvenNumbers.push(currentNumber);
  }
}

function filter(arr, callback) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    let currentItem = arr[i];
    let isCallbackTrue = callback(currentItem);
    if (isCallbackTrue) {
      filteredArray.push(currentItem);
    }
  }
  return filteredArray;
}

let filteredNums = filter(numbers, isEven);

let uppercasedLetters = filter(["a", "B", "C", "d"], function (letter) {
  return letter === letter.toUpperCase();
});

console.log(uppercasedLetters);

console.log(filteredNums);

let myEvenNums = numbers.filter(isEven);

let glen = {
  firstName: "Glen",
  lastName: "Harry",
  sayHello: function () {
    let msg = "Hello from " + glen.firstName;
    console.log(msg);
  },
};

glen.sayHello();

let emma = {
  firstName: "Emma",
  lastName: "Andersson",
  sayHello: function () {
    let msg = "Hello from " + emma.firstName;
    console.log(msg);
  },
};

emma.sayHello();

function sayHello(person) {
  let msg = "Hello from " + person.firstName;
  console.log(msg);
}

sayHello(emma);
sayHello(glen);

// Factory - function that creates an object

function createAccount(firstName, lastName) {
  let obj = {
    firstName: firstName,
    lastName: lastName,
    sayHello: function () {
      console.log("Hello");
    },
  };
  return obj;
}

let rob = createAccount("Robert", "Brown");

class Person {
  sayHello() {
    console.log("Hello");
  }
}

let suguna = new Person();
suguna.sayHello();
