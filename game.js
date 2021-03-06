// This will be the class for the main game logic functions

// This is our board that corresponds to cells in the array
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// initialises players to empty Strings -- assignment comes from choice
var humanPlayer = "";
var aiPlayer = "";
var selected = false;
var aiPlayerTurns = 0;




// the human player selects his choice of symbol
function setPlayerChoice(symbol) {
  if(symbol == "X") {
    humanPlayer = "X";
    aiPlayer = "O";
  } else if (symbol == "O") {
    humanPlayer = "O";
    aiPlayer = "X";
  }
}


// calculate the free Spaces left on the board that haven't been taken up yet
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
    (board[0] == symbol && board[3] == symbol && board[6] == symbol) ||
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
function calcMiniMax(newBoard, symbol) {

  // scoring object idea taken from online to account for taking index of score

  var freeSpaces = calculateFreeSpaces(newBoard);

  if(winStateReached(newBoard, humanPlayer) === true) {
    return {score: -10};

  } else if(winStateReached(newBoard, aiPlayer) === true) {
    //score = 10;
    return {score: 10};

  } else if (freeSpaces.length === 0) {
    //score = 0;
    return {score: 0};
  }

   var moves = [];

    for(var i = 0; i < freeSpaces.length; i++) {
      var newMove = {};
      newMove.index = newBoard[freeSpaces[i]];
      newBoard[freeSpaces[i]] = symbol;


      if(symbol === aiPlayer) {
        var s = calcMiniMax(newBoard, humanPlayer);
        newMove.score = s.score;

      } else {    // so humanPlayer is playing
        var s = calcMiniMax(newBoard, aiPlayer);
        newMove.score = s.score;
      }

      newBoard[freeSpaces[i]] = newMove.index;
      moves.push(newMove);
    }

    var optimalMove;
    if(symbol === aiPlayer) {
      var bestValue = -1000;
      for(var i = 0; i < moves.length; i++) {
        if(moves[i].score > bestValue) {
          bestValue = moves[i].score;
          optimalMove = i;
        }
      }
    } else { //if(symbol === humanPlayer) {
      var bestValue = 1000;
      for (var i = 0; i < moves.length; i++) {
        if(moves[i].score < bestValue) {
          bestValue = moves[i].score;
          optimalMove = i;
        }
      }
    }
    //console.log(optimalMove);
  return moves[optimalMove];

}

function bestCell() {
  return calcMiniMax(board, aiPlayer).index;
}

function aiPlayerTurn() {
  var best = bestCell();
  board[best] = aiPlayer;
  var div = document.getElementById("grid").children;
  console.log(div);
  var p = div[best].childNodes;
  p[0].innerHTML = aiPlayer;
  p[0].classList.remove("empty");
}


function isXorO(elem){
  if((elem === "X") || (elem === "O")) {
    return elem;
  }
}

function clearBoard() {
  var allSymbols = board.every(isXorO);
  console.log(allSymbols);
  if((winStateReached(board,aiPlayer) === true)) {
    reset();
    document.getElementById("message").innerHTML = "You lose!";
  } else if(allSymbols === true) {
    reset();
    document.getElementById("message").innerHTML = "It's a draw!";
  }
}

function reset() {
  board = [0,1,2,3,4,5,6,7,8];
  for(var i = 0; i < document.getElementById("grid").children.length; i++) {
    var div = document.getElementById("grid").children;
    var p = div[i].childNodes;
    p[0].innerHTML = "";
    p[0].className = "empty";
    aiPlayerTurns = 0;
    setTimeout(function() { document.getElementById("message").innerHTML = ""; }, 1000);
    //document.getElementById("message").innerHTML = "";
  }
}


// Cell setup (could be refactored out later)
function completeSetup() {
document.getElementById("one").onclick = () => {

  var p = document.getElementById("one").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[0] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }

}
document.getElementById("two").onclick = () => {
  var p = document.getElementById("two").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[1] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("three").onclick = () => {
  var p = document.getElementById("three").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[2] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("four").onclick = () => {
  var p = document.getElementById("four").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[3] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("five").onclick = () => {
  var p = document.getElementById("five").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[4] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("six").onclick = () => {
  var p = document.getElementById("six").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[5] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("seven").onclick = () => {
  var p = document.getElementById("seven").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[6] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("eight").onclick = () => {
  var p = document.getElementById("eight").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[7] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
}
document.getElementById("nine").onclick = () => {
  var p = document.getElementById("nine").childNodes;
  if(p[0].className === "empty") {
  p[0].innerHTML = humanPlayer;
  console.log(p);
  board[8] = humanPlayer;
  console.log(board);
  if (aiPlayerTurns < 4) {
    aiPlayerTurn();
    aiPlayerTurns++;
  } else {
    console.log("Game has finished");
  }
  setTimeout(function() { clearBoard(); }, 500);
  p[0].classList.remove("empty");
  }
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
