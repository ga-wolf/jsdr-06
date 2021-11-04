let person = {
  firstName: "Jacques",
  lastName: "Cousteau",
  sayHi: function () {
    console.log("Hello, I am Jacques!");
  },
};

console.log(person);
console.log(person.firstName);

person.sayHi();

let game = {
  score: 0,
  start: function () {
    console.log("The game has started");
  },
  scorePoint: function (num) {
    console.log(num);
  },
};

game.start();
game.scorePoint(5);

let ticTacToe = {
  playerOneName: "Haden",
  playerTwoName: "Tengku",
  playerOneMove: function () {
    // Generate "Rock", "Paper" or "Scissors"
    console.log("Player one moved");
  },
};

ticTacToe.playerOneMove();
// ticTacToe.playerTwoMove();
// ticTacToe.compareMoves();
// ticTacToe.displayWinner();

let nums = [1, 2, 3];

// METHOD
// HIGHER ORDER FUNCTION
nums.forEach(function (num) {
  console.log("This ran", num);
});

["a", "b", "c"].forEach(function (letter) {
  console.log("Current letter", letter);
});

console.clear();

// Callback

function higherOrder(callback) {
  // How would I run that function?
  callback();
}

higherOrder(function () {
  console.log("I am a callback!");
});

console.clear();

function delayMe() {
  console.log("I was delayed");
}

// delayMe();
// setTimeout(delayMe, 1000); // Callback, Time in milliseconds

function callRegularly() {
  console.log("I am repeatedly called");
}

// setInterval(callRegularly, 1500); // Callback, time in ms
