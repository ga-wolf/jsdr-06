const ordinals = ["first", "second", "third", "fourth"];

// Access Items
console.log(ordinals[0]);

// Manipulate Items
ordinals[0] = "FIRST";

ordinals.push("fourth"); // Add "fourth" to the end
ordinals.pop(); // Remove the last item
ordinals.unshift("zeroeth"); // Add "zeroeth" to the start
ordinals.shift(); // Remove the first item

// Iteration (looping through Arrays)
for (let i = 0; i < ordinals.length; i += 1) {
  let item = ordinals[i];
  console.log(item);
}

// Objects

const emptyObj = {};

const course = {
  name: "JSD",
};

// Access Information
console.log(course.name);

// Manipulate Information
course.name = "JavaScript Development";

// Add a new key
course.ia = "Stacey";

console.log(course);

const bookSeries = {
  name: "In Search of Lost Time",
  authors: ["Marcel Proust", "Second Author"],
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

console.clear();

const marxFamily = [
  { name: "Groucho", birthYear: 1890 }, // 0
  { name: "Harpo", birthYear: 1888 }, // 1
  { name: "Chico", birthYear: 1887 }, // 2
  { name: "Zeppo", birthYear: 1901 }, // 3
  { name: "Gummo", birthYear: 1893 },
];

for (let i = 0; i < marxFamily.length; i += 1) {
  let currentBrother = marxFamily[i];
  console.log(currentBrother.name, currentBrother.birthYear);
}

const series = {
  name: "My Book Series",
  author: "My Author",
  books: [
    ["Series 1 Book 1", "Series 1 Book 2"],
    ["Series 2 Book 1", "Series 2 Book 2"],
  ],
};

console.log(series.name);
console.log(series.books[0]);
// The first book of series 2
console.log(series.books[1][0]);
