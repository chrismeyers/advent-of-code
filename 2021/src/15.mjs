const shortest = (grid, rows, columns) => {
  class Cell {
    constructor(x, y, distance) {
      this.x = x;
      this.y = y;
      this.distance = distance;
    }
  }

  const distances = new Array(rows);
  for (let i = 0; i < distances.length; i++) {
    distances[i] = new Array(columns).fill(Number.MAX_VALUE);
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const stack = [];
  stack.push(new Cell(0, 0, 0));
  distances[0][0] = grid[0][0]; // eslint-disable-line prefer-destructuring

  while (stack.length !== 0) {
    const cell = stack[0];
    stack.shift();

    for (let i = 0; i < dx.length; i++) {
      const x = cell.x + dx[i];
      const y = cell.y + dy[i];

      if (x >= 0 && x < rows && y >= 0 && y < columns) {
        if (distances[x][y] > distances[cell.x][cell.y] + grid[x][y]) {
          distances[x][y] = distances[cell.x][cell.y] + grid[x][y];
          stack.push(new Cell(x, y, distances[x][y]));
        }
      }
    }

    stack.sort((a, b) => {
      if (a.distance === b.distance) {
        if (a.x !== b.x) return a.x - b.x;
        return a.x - b.x;
      }
      return a.distance - b.distance;
    });
  }

  return distances;
};

export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split('').map(Number));

  const columns = items[0].length;
  const rows = items.length;

  const distances = shortest(items, rows, columns);

  const total = distances[rows - 1][columns - 1] - items[0][0];

  return total;
};

export const solve2 = (input) => {
  const items = input.split('\n').map((item) => item.split('').map(Number));

  const grid = [];

  for (let i = 0; i < items.length; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < items[0].length; k++) {
        const val = items[i][k] + j > 9 ? items[i][k] + j - 9 : items[i][k] + j;
        row.push(val);
      }
    }
    grid.push(row);
  }

  for (let i = 0; i < 4; i++) {
    const previous = grid.slice(
      i * items.length,
      i * items.length + items.length
    );
    for (let j = 0; j < previous.length; j++) {
      const row = [];
      for (let k = 0; k < previous[0].length; k++) {
        const val = previous[j][k] + 1 > 9 ? 1 : previous[j][k] + 1;
        row.push(val);
      }
      grid.push(row);
    }
  }

  const columns = grid[0].length;
  const rows = grid.length;

  const distances = shortest(grid, rows, columns);

  const total = distances[rows - 1][columns - 1] - items[0][0];

  return total;
};
