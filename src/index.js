import './style.css';
import './index.html';
import UI from './ui';
import game from './game';

// wait until both players select a name
UI.selectPlayerNames().then(playerNames => {
  // add players to the game
  game.addPlayer(playerNames['x'], 'x');
  game.addPlayer(playerNames['o'], 'o');
  game.start();
});


// console.log(playerNames);

// add players to a game
// start a game (loop until game over)
  // listen for clicks
  // once user clicks, check if field taken etc
  // at the end of every turn switch player and check if game is draw