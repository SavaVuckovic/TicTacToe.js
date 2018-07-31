import './style.css';
import './index.html';
import UI from './ui';
import game from './game';

// game cannot start until both players select a name
UI.selectPlayerNames().then(playerNames => {
  // add players to the game & start
  game.addPlayer(playerNames['x'], 'x');
  game.addPlayer(playerNames['o'], 'o');
  game.start();

  // listen for player moves
  UI.addSlotListeners((index) => {
    const moveResult = game.playMove(index);
    UI.renderSlots(game.gameBoard.getSlots());

    if (moveResult !== false) {
      UI.showGameOver(moveResult, () => {
        game.start();
        UI.renderSlots(game.gameBoard.getSlots());
      });
    }
  });
});