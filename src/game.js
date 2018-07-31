import Player from './player.js';
import gameBoard from './gameboard.js';

const Game = {
  players: {},
  board: gameBoard,
  addPlayer(name, symbol) {
    const player = new Player(name, symbol);
    this.players[symbol] = player;
  },
  start() {
    this.currentPlayer = 'o';
    this.board.reset();
  },
  gameOver() {
    if (this.board.someoneWon) {
      return `Player ${this.players[this.currentPlayer].name} has won!`;
    } else if (this.board.slots.every(slot => slot !== null)) {
      return `This game is a draw!`;
    } else {
      return false;
    }
  },
  switchCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === 'o' ? 'x' : 'o';
  },
  playMove(slotIndex) {
    board.fillInSlot(slotIndex, this.currentPlayer);
    return board.someoneWon();
  }
};

export default Game;