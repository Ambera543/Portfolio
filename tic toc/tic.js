window.addEventListener("DOMContentLoaded", () => {
  const marks = Array.from(document.querySelectorAll(".mark"));
  const display = document.querySelector(".display-player");
  const reset = document.querySelector("#reset");
  const msg = document.querySelector(".msg");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let activeGame = true;

  const Player_X_Won = "Player_X_Won";
  const Player_O_Won = "Player_O_Won";
  const Tie = "Tie";

  const winnning = [
    // 0 1 2
    // 3 4 5
    // 6 7 8
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningCondition[i];
      const a = board[winningCondition[0]];
      const b = board[winningCondition[1]];
      const c = board[winningCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      msg(currentPlayer === "X" ? Player_X_Won : Player_O_Won);
      activeGame = false;
      return;
    }
    if (!board.includes("")) msg("Draw in the game");
  }

  const msg = (type) => {
    switch (type) {
      case Player_O_Won:
        msg.innerHTML = "Player O Won";
        break;
      case Player_X_Won:
        msg.innerHTML = "Player X Won";
        break;
      case Tie:
        msg.innerHTML = "Draw in the game";
    }
    msg.classList.remove("hide");
  };

  const isValid = (mark) => {
    if (mark.innerText === "X" || mark.innerText === "O") {
      return false;
    } else {
      return true;
    }
  };

  const userAction = (mark, index) => {
    if (isValid(mark) && activeGame) {
      mark.innerText = currentPlayer;
      mark.classList.add("player${currentPlayer}");
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    activeGame = true;
    msg.classList.add("hide");
    if (currentPlayer === "O") {
      changePlayer();
    }

    marks.forEach((mark) => {
      mark.innerText = "";
      mark.classList.remove("playerX");
      mark.classList.remove("playerO");
    });
  };
  marks.forEach((mark, index) => {
    mark.addEventListener("click", () => userAction(mark, index));
  });
  button.addEventListener("click", reset);
});

// const marks = document.querySelectorAll(".mark");
// const player_X ="X";
// const player_O ="O";
// let turn = player_X;

// const board =Array(marks.length);
// board.fill(null);

// const strike =document.getElementById("strike");
