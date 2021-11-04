// let score = 0;

// function scorePoint() {
//   score += 1;
//   console.log(score);
// }

// scorePoint();

function createGame() {
  let score = 0;

  function scorePoint() {
    score += 1;
    console.log(score);
  }

  return scorePoint;
}

let scoreP = createGame();

scoreP();

// function add(x, y) {
//   let result = x + y;
//   return result;
// }

// let r = add(100, 3);
// console.log(r);

// let bankAccount = {
//   balance: 100,
// };

function myBank() {
  let bankAccount = {
    balance: 100,
  };

  // Closure (retains access to a scope)
  function depositFunction(money) {
    bankAccount.balance += money;
    console.log(bankAccount);
  }

  // Closure (retains access to a scope)
  function withdrawFunction(money) {
    bankAccount.balance -= money;
    console.log(bankAccount);
  }

  return {
    withdraw: withdrawFunction,
    deposit: depositFunction,
  };
}

let bank = myBank();

bank.withdraw(100);
