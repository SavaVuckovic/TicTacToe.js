const UI = {
  // given an array representing a board, renders correct symbols on correct slots
  renderSlots(boardSlots) {
    const slots = document.querySelectorAll('.slot');
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
  },
  // opens a modal allowing players to select their names
  selectPlayerNames() {
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
  }
};

export default UI;