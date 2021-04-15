let counter = 0;
let winnerBoard = ["", "", "", "", "", "", "", "", ""];

const checkWinner = () => {
  let isWinner = false;
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningPositions.forEach((combo) => {
    if (
      winnerBoard[combo[0]] &&
      winnerBoard[combo[0]] === winnerBoard[combo[1]] &&
      winnerBoard[combo[0]] === winnerBoard[combo[2]]
    ) {
      isWinner = true;
      document.getElementById("result").innerHTML = `Winner is ${
        winnerBoard[combo[0]]
      }`;
    }
  });
  checkTie(isWinner);
};

const checkTie = (isWinner) => {
  count = 0;
  for (let i = 0; i < winnerBoard.length; i++) {
    if (winnerBoard[i] === "X" || winnerBoard[i] === "O") {
      count += 1;
    }
  }
  if (count === 9 && !isWinner) {
    document.getElementById("result").innerHTML = "Match is Tied";
  }
};

const clearBoard = () => {
  for (let i = 0; i < winnerBoard.length; i++) {
    document.getElementById(i).innerHTML = " ";
  }
  document.getElementById("result").innerHTML = "";
  window.location.reload();
};

document.querySelector(".main-container").addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";

  if (!isButton) {
    return;
  }

  let btn = document.getElementById(event.target.id);

  if (counter % 2 == 0) {
    btn.innerHTML = "O";
    winnerBoard[btn.id] = btn.textContent;
    counter++;
  } else {
    btn.innerHTML = "X";
    winnerBoard[btn.id] = btn.textContent;
    counter++;
  }

  if (btn.innerHTML != undefined) {
    btn.disabled = true;
  }

  checkWinner();
});

document.querySelector("#reset").addEventListener("click", (event) => {
  clearBoard();
});
