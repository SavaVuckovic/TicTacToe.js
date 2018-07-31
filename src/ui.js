const slots = document.querySelectorAll('.slot');

// given an array representing a board, renders correct symbols on correct slots
const renderSlots = boardSlots => {
  slots.forEach(slot => {
    const correspondingSymbol = boardSlots[slot.dataset.id];
    if (correspondingSymbol === 'x') {
      slot.innerHTML = '&times;';
      slot.style.color = '#d90429';
    } else if (correspondingSymbol === 'o') {
      slot.innerHTML = '&#9675;';
      slot.style.color = '#00a8e8';
    }
  });
};

// opens a modal allowing players to select their names
const selectPlayerNames = () => {
  const modal = document.querySelector('#players-modal');
  const form = document.querySelector('#players-form'); 
  
  modal.style.display = 'block';

  return new Promise(resolve => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const playerX = e.target.elements['player-x-name'];
      const playerO = e.target.elements['player-o-name'];
      const players = {
        x: playerX.value,
        o: playerO.value
      };
      playerX.value = '';
      playerO.value = '';
      modal.style.display = 'none';
      resolve(players);
    });
  });
};

// adds listeners to all slots 
const addSlotListeners = callback => {
  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      callback(slot.dataset.id);
    });
  });
};

// displays a game over modal with a proper message
const showGameOver = msg => {
  const modal = document.querySelector('#game-over-modal');
  const message = document.querySelector('#game-over-msg');
  const close = document.querySelector('#close-game-over');
  modal.style.display = 'block';
  message.innerHTML = `<h3>${msg}</h3>`;
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default {
  renderSlots,
  selectPlayerNames,
  addSlotListeners,
  showGameOver
};