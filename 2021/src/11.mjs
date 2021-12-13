export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split('').map(Number));

  const columns = items[0].length;
  const rows = items.length;
  let flashes = 0;
  let flashed;

  let flash; // "Forward declare" function

  const process = (x, y) => {
    items[y][x] += 1;
    if (items[y][x] > 9) {
      items[y][x] = 0;
      flashed[y][x] = true;
      flashes += 1;
      flash(x, y);
    }
  };

  flash = (x, y) => {
    // Left
    if (x - 1 >= 0 && !flashed[y][x - 1]) process(x - 1, y);
    // Right
    if (x + 1 <= columns - 1 && !flashed[y][x + 1]) process(x + 1, y);
    // Up
    if (y - 1 >= 0 && !flashed[y - 1][x]) process(x, y - 1);
    // Down
    if (y + 1 <= rows - 1 && !flashed[y + 1][x]) process(x, y + 1);
    // Up left
    if (y - 1 >= 0 && x - 1 >= 0 && !flashed[y - 1][x - 1])
      process(x - 1, y - 1);
    // Up right
    if (y - 1 >= 0 && x + 1 <= columns - 1 && !flashed[y - 1][x + 1])
      process(x + 1, y - 1);
    // Down left
    if (y + 1 <= rows - 1 && x - 1 >= 0 && !flashed[y + 1][x - 1])
      process(x - 1, y + 1);
    // Down right
    if (y + 1 <= rows - 1 && x + 1 <= columns - 1 && !flashed[y + 1][x + 1])
      process(x + 1, y + 1);
  };

  for (let i = 0; i < 100; i++) {
    flashed = new Array(rows);
    for (let j = 0; j < flashed.length; j++) {
      flashed[j] = new Array(columns).fill(false);
    }
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (!flashed[y][x]) {
          process(x, y);
        }
      }
    }
  }

  return flashes;
};

export const solve2 = (input) => {
  const items = input.split('\n').map((item) => item.split('').map(Number));

  const columns = items[0].length;
  const rows = items.length;
  let flashed;

  let flash; // "Forward declare" function

  const process = (x, y) => {
    items[y][x] += 1;
    if (items[y][x] > 9) {
      items[y][x] = 0;
      flashed[y][x] = true;
      flash(x, y);
    }
  };

  flash = (x, y) => {
    // Left
    if (x - 1 >= 0 && !flashed[y][x - 1]) process(x - 1, y);
    // Right
    if (x + 1 <= columns - 1 && !flashed[y][x + 1]) process(x + 1, y);
    // Up
    if (y - 1 >= 0 && !flashed[y - 1][x]) process(x, y - 1);
    // Down
    if (y + 1 <= rows - 1 && !flashed[y + 1][x]) process(x, y + 1);
    // Up left
    if (y - 1 >= 0 && x - 1 >= 0 && !flashed[y - 1][x - 1])
      process(x - 1, y - 1);
    // Up right
    if (y - 1 >= 0 && x + 1 <= columns - 1 && !flashed[y - 1][x + 1])
      process(x + 1, y - 1);
    // Down left
    if (y + 1 <= rows - 1 && x - 1 >= 0 && !flashed[y + 1][x - 1])
      process(x - 1, y + 1);
    // Down right
    if (y + 1 <= rows - 1 && x + 1 <= columns - 1 && !flashed[y + 1][x + 1])
      process(x + 1, y + 1);
  };

  const simultaneous = () =>
    items.map((item) => item.every((entry) => entry === 0)).every((row) => row);

  let step = 0;
  while (!simultaneous()) {
    flashed = new Array(rows);
    for (let j = 0; j < flashed.length; j++) {
      flashed[j] = new Array(columns).fill(false);
    }
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (!flashed[y][x]) {
          process(x, y);
        }
      }
    }
    step += 1;
  }

  return step;
};
