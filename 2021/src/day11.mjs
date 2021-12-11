export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split('').map(Number));

  const columns = items[0].length;
  const rows = items.length;
  let flashes = 0;
  let flashed;

  const flash = (x, y) => {
    // Left
    if (x - 1 >= 0 && !flashed[y][x - 1]) {
      items[y][x - 1] += 1;
      if (items[y][x - 1] > 9) {
        items[y][x - 1] = 0;
        flashed[y][x - 1] = true;
        flashes += 1;
        flash(x - 1, y);
      }
    }
    // Right
    if (x + 1 <= columns - 1 && !flashed[y][x + 1]) {
      items[y][x + 1] += 1;
      if (items[y][x + 1] > 9) {
        items[y][x + 1] = 0;
        flashed[y][x + 1] = true;
        flashes += 1;
        flash(x + 1, y);
      }
    }
    // Up
    if (y - 1 >= 0 && !flashed[y - 1][x]) {
      items[y - 1][x] += 1;
      if (items[y - 1][x] > 9) {
        items[y - 1][x] = 0;
        flashed[y - 1][x] = true;
        flashes += 1;
        flash(x, y - 1);
      }
    }
    // Down
    if (y + 1 <= rows - 1 && !flashed[y + 1][x]) {
      items[y + 1][x] += 1;
      if (items[y + 1][x] > 9) {
        items[y + 1][x] = 0;
        flashed[y + 1][x] = true;
        flashes += 1;
        flash(x, y + 1);
      }
    }
    // Up left
    if (y - 1 >= 0 && x - 1 >= 0 && !flashed[y - 1][x - 1]) {
      items[y - 1][x - 1] += 1;
      if (items[y - 1][x - 1] > 9) {
        items[y - 1][x - 1] = 0;
        flashed[y - 1][x - 1] = true;
        flashes += 1;
        flash(x - 1, y - 1);
      }
    }
    // Up right
    if (y - 1 >= 0 && x + 1 <= columns - 1 && !flashed[y - 1][x + 1]) {
      items[y - 1][x + 1] += 1;
      if (items[y - 1][x + 1] > 9) {
        items[y - 1][x + 1] = 0;
        flashed[y - 1][x + 1] = true;
        flashes += 1;
        flash(x + 1, y - 1);
      }
    }
    // Down left
    if (y + 1 <= rows - 1 && x - 1 >= 0 && !flashed[y + 1][x - 1]) {
      items[y + 1][x - 1] += 1;
      if (items[y + 1][x - 1] > 9) {
        items[y + 1][x - 1] = 0;
        flashed[y + 1][x - 1] = true;
        flashes += 1;
        flash(x - 1, y + 1);
      }
    }
    // Down right
    if (y + 1 <= rows - 1 && x + 1 <= columns - 1 && !flashed[y + 1][x + 1]) {
      items[y + 1][x + 1] += 1;
      if (items[y + 1][x + 1] > 9) {
        items[y + 1][x + 1] = 0;
        flashed[y + 1][x + 1] = true;
        flashes += 1;
        flash(x + 1, y + 1);
      }
    }
  };

  for (let i = 0; i < 100; i++) {
    flashed = new Array(rows);
    for (let ii = 0; ii < flashed.length; ii++) {
      flashed[ii] = new Array(columns).fill(false);
    }
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (!flashed[y][x]) {
          items[y][x] += 1;
          if (items[y][x] > 9) {
            items[y][x] = 0;
            flashed[y][x] = true;
            flashes += 1;
            flash(x, y);
          }
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

  const flash = (x, y) => {
    // Left
    if (x - 1 >= 0 && !flashed[y][x - 1]) {
      items[y][x - 1] += 1;
      if (items[y][x - 1] > 9) {
        items[y][x - 1] = 0;
        flashed[y][x - 1] = true;
        flash(x - 1, y);
      }
    }
    // Right
    if (x + 1 <= columns - 1 && !flashed[y][x + 1]) {
      items[y][x + 1] += 1;
      if (items[y][x + 1] > 9) {
        items[y][x + 1] = 0;
        flashed[y][x + 1] = true;
        flash(x + 1, y);
      }
    }
    // Up
    if (y - 1 >= 0 && !flashed[y - 1][x]) {
      items[y - 1][x] += 1;
      if (items[y - 1][x] > 9) {
        items[y - 1][x] = 0;
        flashed[y - 1][x] = true;
        flash(x, y - 1);
      }
    }
    // Down
    if (y + 1 <= rows - 1 && !flashed[y + 1][x]) {
      items[y + 1][x] += 1;
      if (items[y + 1][x] > 9) {
        items[y + 1][x] = 0;
        flashed[y + 1][x] = true;
        flash(x, y + 1);
      }
    }
    // Up left
    if (y - 1 >= 0 && x - 1 >= 0 && !flashed[y - 1][x - 1]) {
      items[y - 1][x - 1] += 1;
      if (items[y - 1][x - 1] > 9) {
        items[y - 1][x - 1] = 0;
        flashed[y - 1][x - 1] = true;
        flash(x - 1, y - 1);
      }
    }
    // Up right
    if (y - 1 >= 0 && x + 1 <= columns - 1 && !flashed[y - 1][x + 1]) {
      items[y - 1][x + 1] += 1;
      if (items[y - 1][x + 1] > 9) {
        items[y - 1][x + 1] = 0;
        flashed[y - 1][x + 1] = true;
        flash(x + 1, y - 1);
      }
    }
    // Down left
    if (y + 1 <= rows - 1 && x - 1 >= 0 && !flashed[y + 1][x - 1]) {
      items[y + 1][x - 1] += 1;
      if (items[y + 1][x - 1] > 9) {
        items[y + 1][x - 1] = 0;
        flashed[y + 1][x - 1] = true;
        flash(x - 1, y + 1);
      }
    }
    // Down right
    if (y + 1 <= rows - 1 && x + 1 <= columns - 1 && !flashed[y + 1][x + 1]) {
      items[y + 1][x + 1] += 1;
      if (items[y + 1][x + 1] > 9) {
        items[y + 1][x + 1] = 0;
        flashed[y + 1][x + 1] = true;
        flash(x + 1, y + 1);
      }
    }
  };

  const simultaneous = () =>
    items.map((item) => item.every((entry) => entry === 0)).every((row) => row);

  let step = 0;
  while (!simultaneous()) {
    flashed = new Array(rows);
    for (let ii = 0; ii < flashed.length; ii++) {
      flashed[ii] = new Array(columns).fill(false);
    }
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (!flashed[y][x]) {
          items[y][x] += 1;
          if (items[y][x] > 9) {
            items[y][x] = 0;
            flashed[y][x] = true;
            flash(x, y);
          }
        }
      }
    }
    step += 1;
  }

  return step;
};
