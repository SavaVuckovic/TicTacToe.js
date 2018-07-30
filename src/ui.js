const UI = {
  renderSlots(boardSlots) {
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
      const correspondingSymbol = boardSlots[slot.dataset.id];
      if (correspondingSymbol === 'x') {
        slot.innerHTML = '&times;';
      } else if (correspondingSymbol === 'o') {
        slot.innerHTML = '&#9675;';
      }
    });
  }
};

export default UI;