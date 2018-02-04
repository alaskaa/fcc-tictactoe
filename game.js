// This will be the class for the main game logic functions

// This is our board that corresponds to cells in the array
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var humanPlayer = "O";
var aiPlayer = "X";



function calculateFreeSpaces() {
  var freeBoard = board.filter(s => s != "O" && s != "X");
  return freeBoard;
}

// function that returns a boolean whether a wining state has been reached
// takes in a board and a symbol that corressponds to the player
function winStateReached(board, symbol) {

  if (
    (board[0] == symbol && board[4] == symbol && board[8] == symbol) ||
    (board[2] == symbol && board[4] == symbol && board[6] == symbol) ||
    (board[0] == symbol && board[1] == symbol && board[2] == symbol) ||
    (board[3] == symbol && board[4] == symbol && board[5] == symbol) ||
    (board[6] == symbol && board[7] == symbol && board[8] == symbol) ||
    (board[3] == symbol && board[3] == symbol && board[6] == symbol) ||
    (board[1] == symbol && board[4] == symbol && board[7] == symbol) ||
    (board[2] == symbol && board[5] == symbol && board[8] == symbol)
   ) {
    return true;
    // winning state has been found
  } else {
    return false;
    // winning state has not been found
  }
}
