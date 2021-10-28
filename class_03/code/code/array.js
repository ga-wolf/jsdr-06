// Creation - Array literal

let letters = ["a", "b", "c", "d", "e", "f", "g"];

// Accessing Items - zero-based index

let letterA = letters[0];
let lastLetter = letters[letters.length - 1];

// Reassigning Items

letters[1] = "B";
console.log(letters);

// Looping
// Iterate through letters

for (let index = 0; index < letters.length; index += 1) {
  let currentLetter = letters[index];
  console.log(currentLetter);
}

// Common Methods

let nums = [2, 3, 4];

// If I wanted to add 5 to the end...
nums.push(5);
console.log(nums);

// If I wanted to remove the last item...
nums.pop();
console.log(nums);

// If I wanted to add 1 to the start...
nums.unshift(1);
console.log(nums);

// If I wanted to remove the first item...
nums.shift();
console.log(nums);
