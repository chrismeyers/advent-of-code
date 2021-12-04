export const solve1 = (input) => {
  const ROWS = 5;
  const COLUMNS = 5;
  const items = input.split(/\n\s*\n/);

  const numbers = items[0].split(',').map((n) => parseInt(n, 10));
  const boards = items.slice(1).map((board) =>
    board
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((number) => ({ value: parseInt(number, 10), marked: false }))
  );

  let winner;
  let number;
  for (let i = 0; i < numbers.length; i++) {
    if (winner) break;
    number = numbers[i];
    for (let j = 0; j < boards.length; j++) {
      const board = boards[j];
      for (let k = 0; k < board.length; k++) {
        const item = board[k];
        if (item.value === number) item.marked = true;
      }
    }
    for (let j = 0; j < boards.length; j++) {
      if (winner) break;
      const board = boards[j];
      // Horizontal win
      for (let k = 0; k < COLUMNS; k++) {
        if (
          board[k * COLUMNS].marked &&
          board[k * COLUMNS + 1].marked &&
          board[k * COLUMNS + 2].marked &&
          board[k * COLUMNS + 3].marked &&
          board[k * COLUMNS + 4].marked
        ) {
          winner = board;
        }
        // Vertical win
        if (
          board[k * ROWS].marked &&
          board[k + 1 * ROWS].marked &&
          board[k + 2 * ROWS].marked &&
          board[k + 3 * ROWS].marked &&
          board[k + 4 * ROWS].marked
        ) {
          winner = board;
        }
      }
    }
  }

  const value = winner.reduce(
    (acc, item) => acc + (item.marked ? 0 : item.value),
    0
  );

  return value * number;
};

export const solve2 = (input) => {
  const SIZE = 5;
  const items = input.split(/\n\s*\n/);

  const numbers = items[0].split(',').map((n) => parseInt(n, 10));
  const boards = items.slice(1).map((board) =>
    board
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((number) => ({ value: parseInt(number, 10), marked: false }))
  );

  const winners = new Map();
  let winner;
  let number;
  for (let i = 0; i < numbers.length; i++) {
    if (winners.size === boards.length) break;
    number = numbers[i];
    for (let j = 0; j < boards.length; j++) {
      const board = boards[j];
      for (let k = 0; k < board.length; k++) {
        const item = board[k];
        if (item.value === number) item.marked = true;
      }
    }
    for (let j = 0; j < boards.length; j++) {
      const board = boards[j];
      for (let k = 0; k < SIZE; k++) {
        if (
          (board[k * SIZE].marked &&
            board[k * SIZE + 1].marked &&
            board[k * SIZE + 2].marked &&
            board[k * SIZE + 3].marked &&
            board[k * SIZE + 4].marked) ||
          (board[k].marked &&
            board[k + 1 * SIZE].marked &&
            board[k + 2 * SIZE].marked &&
            board[k + 3 * SIZE].marked &&
            board[k + 4 * SIZE].marked)
        ) {
          if (!winners.has(j)) {
            winners.set(j, true);
            winner = board;
          }
        }
      }
    }
  }

  const value = winner.reduce(
    (acc, item) => acc + (item.marked ? 0 : item.value),
    0
  );

  return value * number;
};
