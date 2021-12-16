// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' ||
		b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' ||
		b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player O won');
	}
	else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' ||
		b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player O won');
	}
	else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player O won');
	}

	// Checking of Player O finsh
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
		|| b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
		(b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
		b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
		(b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
		b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player O Turn";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or O
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "O";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "O";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "O";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "O";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "O";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "O";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "O";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "O";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "O";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}



// window.addEventListener("DOMContentLoaded", () => {
//   const marks = Array.from(document.querySelectorAll(".mark"));
//   const display = document.querySelector(".display-player");
//   const reset = document.querySelector("#reset");
//   const msg = document.querySelector(".msg");

//   let board = ["", "", "", "", "", "", "", "", ""];
//   let currentPlayer = "X";
//   let activeGame = true;

//   const Player_X_Won = "Player_X_Won";
//   const Player_O_Won = "Player_O_Won";
//   const Tie = "Tie";

//   const winnning = [
//     // 0 1 2
//     // 3 4 5
//     // 6 7 8
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//       const winCondition = winningCondition[i];
//       const a = board[winningCondition[0]];
//       const b = board[winningCondition[1]];
//       const c = board[winningCondition[2]];
//       if (a === "" || b === "" || c === "") {
//         continue;
//       }
//       if (a === b && b === c) {
//         roundWon = true;
//         break;
//       }
//     }
//     if (roundWon) {
//       msg(currentPlayer === "X" ? Player_X_Won : Player_O_Won);
//       activeGame = false;
//       return;
//     }
//     if (!board.includes("")) msg("Draw in the game");
//   }

//   const msg = (type) => {
//     switch (type) {
//       case Player_O_Won:
//         msg.innerHTML = "Player O Won";
//         break;
//       case Player_X_Won:
//         msg.innerHTML = "Player X Won";
//         break;
//       case Tie:
//         msg.innerHTML = "Draw in the game";
//     }
//     msg.classList.remove("hide");
//   };

//   const updateBoard = (index) => {
//     board[index] = currentPlayer;
//   };

//   const changePlayer = {
//       display.classList.remove("player${currentPlayer}"),
//       currentPlayer = currentPlayer === "X" ? "O" :"X" ,
//     display.innerText= currentPlayer,
//     display.classList.add("player${currentPlayer}") }

//   const isValid = (mark) => {
//     if (mark.innerText === "X" || mark.innerText === "O") {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const userAction = (mark, index) => {
//     if (isValid(mark) && activeGame) {
//       mark.innerText = currentPlayer;
//       mark.classList.add("player${currentPlayer}");
//       updateBoard(index);
//       handleResultValidation();
//       changePlayer();
//     }
//   };

//   const reset = () => {
//     board = ["", "", "", "", "", "", "", "", ""];
//     activeGame = true;
//     msg.classList.add("hide");
//     if (currentPlayer === "O") {
//       changePlayer();
//     }

//     marks.forEach((mark) => {
//       mark.innerText = "";
//       mark.classList.remove("playerX");
//       mark.classList.remove("playerO");
//     });
//   };
//   marks.forEach((mark, index) => {
//     mark.addEventListener("click", () => userAction(mark, index));
//   });
//   button.addEventListener("click", reset);
// });

// const marks = document.querySelectorAll(".mark");
// const player_X ="X";
// const player_O ="O";
// let turn = player_X;

// const board =Array(marks.length);
// board.fill(null);

// const strike =document.getElementById("strike");
