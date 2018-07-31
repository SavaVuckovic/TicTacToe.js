import Player from './player.js';
import gameBoard from './gameboard.js';

const players = {};
let currentPlayer = 'o';

// constructs and adds a new player object
const addPlayer = (name, symbol) => {
  players[symbol] = new Player(name, symbol);
};

// starts the game
const start = () => {
  currentPlayer = 'o';
  gameBoard.reset();
};

// check if game is over and what is the result (draw or win)
const gameOver = () => {
  if (gameBoard.someoneWon()) {
    return `Player ${players[currentPlayer].name} has won!`;
  } else if (gameBoard.allSlotsFull()) {
    return `The result is a draw!`;
  } else {
    return false;
  }
};

// next players turn
const switchCurrentPlayer = () => {
  currentPlayer = currentPlayer === 'o' ? 'x' : 'o';
};

// allows a player to play his turn
const playMove = slotIndex => {
  if (!gameBoard.slotTaken(slotIndex)) {
    gameBoard.fillInSlot(slotIndex, currentPlayer);
    if (!gameOver()) {
      switchCurrentPlayer();
    } 
    return gameOver();
  } else {
    return false;
  }
};

export default {
  addPlayer,
  start,
  playMove,
  gameBoard
};