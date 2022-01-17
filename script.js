const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let boardElement;
let gamestate = "playing";
let boardContainer;
let currentPlayer = "X";

const buildBoard = (board) => {
  boardContainer.innerHTML = "";
  boardElement = document.createElement("div");
  boardElement.classList.add("board");

  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let j = 0; j < row.length; j += 1) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.innerText = board[i][j];

      rowElement.appendChild(square);

      square.addEventListener("click", () => {
        squareClick(i, j);
      });
    }

    boardContainer.appendChild(rowElement);
  }
};

const initGame = () => {
  boardContainer = document.createElement("div");
  document.body.appendChild(boardContainer);

  buildBoard(board);
};

const togglePlayer = () => {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
};

const checkWin = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j < board.length - 1; j++) {
      if (board[i][j] != board[i][0] && board[i][j] != "") {
        console.log("false");
      }
      else console.log('true')
    }
  }
  // console.log("win");
};

const squareClick = (column, row) => {
  if (board[column][row] === "") {
    board[column][row] = currentPlayer;

    if (checkWin(board) === true) {
      gamestate = "gameOver";
    } else {
      buildBoard(board);
      togglePlayer();
    }
  }
};

initGame();
