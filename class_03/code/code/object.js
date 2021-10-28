// Object Creation

let emptyObject = {};

console.log(emptyObject);

let blueWhale = {
  name: "Blue Whale",
  weight: "150 tonnes",
  length: "26 metres",
};

let weight = blueWhale.weight;
let l = blueWhale.length;

console.log(l);

let random = {
  num: 10,
  boo: false,
  arr: [],
};

console.log(random);

const bookSeries = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  rating: 5,
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained",
  ],
};

// What if I wanted to "Mythos" to the start of books
bookSeries.books.unshift("Mythos");
console.log(bookSeries);

// Log the number of books in bookSeries
console.log(bookSeries.books.length);

// Log the bookSeries' first book
console.log(bookSeries.books[0]);

// Log the book's rating
console.log(bookSeries.rating);

// Log the book's author
console.log(bookSeries.author);

let greatWhite = {
  maxWeight: 100,
  maxLength: 2,
};

console.log(greatWhite.maxWeight);
greatWhite.maxWeight = 1500;
console.log(greatWhite.maxWeight);

greatWhite.name = "White Shark";
console.log(greatWhite);

console.clear();

const explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  birth: {
    day: 11,
    month: 6,
    year: 0,
  },
};
// Change the birth year to 1910
explorer.birth.year = 1910;

let fName = explorer.firstName;
console.log(fName);

console.log(explorer.birth.day);

let course = {
  name: "JSD",
  provider: "GA",
  ia: "Stacey",
};

console.table(course);
