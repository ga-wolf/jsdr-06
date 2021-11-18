let currentPlayer = "X";

let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function changeTurns() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function makeTurn(column, row) {
  board[column][row] = currentPlayer;
  changeTurns();
}

let boardNode = document.querySelector("#board");

function handleClick(event) {
  if (event.target.className === "cell") {
    let data = event.target.dataset;
    let column = parseInt(data.col);
    let row = parseInt(data.row);
    let spanNode = event.target.querySelector("span");
    spanNode.innerText = currentPlayer;
    makeTurn(column, row);
  }
}

boardNode.addEventListener("click", handleClick);

function checkWinner() {
  // Try to implement this...
}

// ...Try to implement an Computer Player
