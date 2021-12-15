// Define a blueprint for our new "data type"
class Book {}

// Create an instance
let b = new Book();
console.log(b);

class Person {
  constructor(firstName, lastName) {
    console.log("A new person was born");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  addPosts() {}
  editPosts() {}
}

const haden = new Person("Haden", "Liu"); // Run the constructor!

console.log(haden);

class Movie {
  constructor(title) {
    // `this` will refer to a new empty object and
    //    will be automatically returned for us
    this.title = title;
  }
  watch() {
    let message = `You are watching ${this.title}`;
    console.log(message);
  }
  addRating(num) {
    this.rating = num;
  }
}

const peaks = new Movie("14 Peaks");
peaks.watch();
peaks.addRating(4.5);

console.log(peaks);

const theLifeAquatic = new Movie("The Life Aquatic");
theLifeAquatic.watch();

console.clear();

function handleSuccessfulPromise(value) {
  console.log(value);
}

function handleFailedPromise(errorMessage) {
  console.log(errorMessage);
}

function myExecutor(resolve, reject) {
  // resolve is used for saying the promise is successful
  // reject is used to say the promise is failed
  // resolve("THE FILE WAS DOWNLOADED");
  reject("SOMETHING WENT WRONG");
}

let myPromise = new Promise(myExecutor);

myPromise.then(handleSuccessfulPromise).catch(handleFailedPromise);

function delayedExecutor(resolve) {
  setTimeout(function () {
    resolve("This has been delayed");
  }, 3000);
}

function successHandler() {
  console.log("THIS RAN");
}

let delay = new Promise(delayedExecutor);

delay.then(successHandler);
