// This will be the class for the main game logic functions

// This is our board that corresponds to cells in the array
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// initialises players to empty Strings -- assignment comes from choice
var humanPlayer = "";
var aiPlayer = "";
var selected = false;


function setPlayerChoice(symbol) {
  if(symbol == "X") {
    humanPlayer = "X";
    aiPlayer = "O";
  } else if (symbol == "O") {
    humanPlayer = "O";
    aiPlayer = "X";
  }
}


function calculateFreeSpaces() {
  return board.filter(s => s != "O" && s != "X");
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


// AI Player is the maximiser and humanPlayer is the minimiser
function calcMiniMax(board, depth, isMaximizingPlayer) {

  // get the free board spaces that are not taken up so far
  var freeSpaces = calculateFreeSpaces(board);

  //if(current board state is a terminal state) {
  //  return value of the board;
  // }

    // returns the best move for the players

    if(isMaximizingPlayer === true) { // so aiPlayer is playing
        var bestValue = -1000;        // set to very low number
        for(var move of freeSpaces) {
            var value = calcMiniMax(freeSpaces, depth+1, false);
            bestValue = Math.max(bestValue, value);
        }
        return bestValue;


    } else {    // so humanPlayer is playing
        var bestValue = +1000;
        for(var move in freeSpaces) {
            var value = calcMiniMax(freeSpaces, depth+1, true);
            bestValue = Math.min(bestValue, value);
        }
        return bestValue;
    }

}





// Game logic

// Cell setup (could be refactored out later)
function completeSetup() {
document.getElementById("one").onclick = () => {
  var p = document.getElementById("one").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("two").onclick = () => {
  var p = document.getElementById("two").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("three").onclick = () => {
  var p = document.getElementById("three").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("four").onclick = () => {
  var p = document.getElementById("four").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("five").onclick = () => {
  var p = document.getElementById("five").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("six").onclick = () => {
  var p = document.getElementById("six").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("seven").onclick = () => {
  var p = document.getElementById("seven").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("eight").onclick = () => {
  var p = document.getElementById("eight").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
document.getElementById("nine").onclick = () => {
  var p = document.getElementById("nine").childNodes;
  p[0].innerHTML = humanPlayer;
  console.log(p);
}
}



// Lets human Player decide whether he wants to play as X or O
  document.getElementById('crosses').onclick = function() {
     if(selected === false) {
       setPlayerChoice("X");
       console.log(humanPlayer, aiPlayer);
       selected = true;
       completeSetup();
     }
  };

  document.getElementById('noughts').onclick = function() {
    if(selected === false) {
     setPlayerChoice("O");
     console.log(humanPlayer, aiPlayer);
     selected = true;
     completeSetup();
   }
  };
