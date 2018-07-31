const slots = [];
const possibleWins = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let winningRow = null;

// returns current slots state
const getSlots = () => slots;

// clears the board
const reset = () => {
  for (let i = 0; i < 9; i++) {
    slots.push(null);
  }
  winningRow = null;
};

// checks if a slot is already played
const slotTaken = slotIndex => {
  return slots[slotIndex] === null ? false : true;
};

// plays a slot
const fillInSlot = (slotIndex, symbol) => {
  slots[slotIndex] = symbol;
};

// checks if there is a winning row present
const someoneWon = () => {
  possibleWins.forEach(row => {
    if (slots[row[0]] === slots[row[1]] && slots[row[0]] === slots[row[2]] && slots[row[0]] !== null) {
      winningRow = row;
    }
  });
  return winningRow === null ? false : winningRow;
};

// checks if all slots are played
const allSlotsFull = () => {
  return slots.every(slot => slot !== null);
};

export default {
  getSlots,
  reset,
  slotTaken,
  fillInSlot,
  someoneWon,
  allSlotsFull
};