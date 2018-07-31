import Player from './player.js';
import gameBoard from './gameboard.js';

const players = {};
let currentPlayer = 'o';

const addPlayer = (name, symbol) => {
  players[symbol] = new Player(name, symbol);
};

const start = () => {
  currentPlayer = 'o';
  gameBoard.reset();
};

const gameOver = () => {
  if (gameBoard.someoneWon()) {
    return `Player ${players[currentPlayer].name} has won!`;
  } else if (gameBoard.allSlotsFull()) {
    return `The result is a draw!`;
  } else {
    return false;
  }
};

const switchCurrentPlayer = () => {
  currentPlayer = currentPlayer === 'o' ? 'x' : 'o';
};

const playMove = (slotIndex) => {
  gameBoard.fillInSlot(slotIndex, currentPlayer);
  if (gameOver()) {
    // temporary
    console.log(gameOver());
  } else {
    switchCurrentPlayer();
  }
};

export default {
  addPlayer,
  start,
  playMove
};