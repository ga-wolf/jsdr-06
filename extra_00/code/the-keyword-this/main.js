// Global/Default Binding
// `this` will refer to the `window` object

console.log(this);

function sayHello() {
  console.log(this);
}

sayHello(); // Call site

// Event Binding
//  When an event listener runs, the this keyword will refer to
//   the target of the event

let button = document.querySelector("button");

function onButtonClick() {
  console.log(this);
}

button.addEventListener("click", onButtonClick);

// Implicit Binding
//  When you call a method, the keyword this will refer to the
//  containing object

let person = {
  name: "Jacques",
  speak: function () {
    console.log(this.name); // Will refer to the containing object
  },
};

person.speak(); // Call site

function createPerson(name, email) {
  let obj = {
    name: name,
    email: email,
    speak: function () {
      console.log(this.name);
    },
  };
  return obj;
}

let suguna = createPerson("Suguna", "suguna@ga.co");
suguna.speak(); // suguna will be `this`

let emma = createPerson("Emma", "emma@ga.co");
emma.speak(); // emma will be `this`

console.clear();

// Explicit Binding
//  When we use .call, .apply or .bind
//   The keyword `this` refers to the provided argument

function greet() {
  console.log(this.name);
}

let tengku = { name: "Tengku" };

greet.call(tengku); // `this` is set explicitly to tengku

let manijeh = { name: "Manijeh" };

greet.call(manijeh); // `this` is set explicitly to manijeh

greet.call({ name: "Emma" });

// `new` Binding
//  `this` will be set to a new empty object which will be
//   automatically returned for you

// Defining the blueprint
class Animal {
  constructor() {
    console.log(this);
  }
}

// Creating an instances
let dog = new Animal();
console.clear();

console.log(this);

function sayHi() {
  console.log(this);
}

sayHi();

let heading = document.querySelector("h1");

heading.addEventListener("click", function () {
  console.log(this);
});

let computer = {
  startApplication: function () {
    console.log(this);
  },
};

computer.startApplication();

function print() {
  console.log(this);
}

print.call({ name: "My Object" });

class Suburb {
  constructor() {
    console.log(this);
  }
}

let manly = new Suburb();
