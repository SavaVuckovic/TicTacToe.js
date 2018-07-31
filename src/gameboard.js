const gameBoard = {
  slots: [],
  winningRow: null,
  possibleWins: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  reset() {
    for (let i = 0; i < 9; i++) {
      this.slots.push(null);
    }
    this.winningRow = null;
  },
  slotTaken(slotIndex) { 
    return this.slots[slotIndex] === null ? false : true;
  },
  fillInSlot(slotIndex, symbol) {
    if (this.slotTaken(slotIndex)) {
      return false;
    } else {
      this.slots[slotIndex] = symbol;
    }
  },
  someoneWon() {
    this.possibleWins.forEach(row => {
      if (
        this.slots[row[0]] === this.slots[row[1]] &&
        this.slots[row[0]] === this.slots[row[2]] &&
        this.slots[row[0]] !== null
      ) {
        this.winningRow = row;
      }
    });
    return this.winningRow === null ? false : this.winningRow;
  },
  allSlotsFull() {
    this.slots.every(slot => slot !== null);
  }
};

export default gameBoard;