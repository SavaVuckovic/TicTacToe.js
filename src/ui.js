const UI = {
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
  }
};

export default UI;