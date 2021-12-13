export const solve1 = (input) => {
  const items = input.split(/\n\s*\n/);

  const points = items[0]
    .split('\n')
    .map((item) => item.trim().split(',').map(Number));
  const instructions = items[1].split('\n').map((item) =>
    item
      .replace('fold along ', '')
      .split('=')
      .map((part, index) => (index === 1 ? Number(part) : part))
  );

  let rows = 0;
  let columns = 0;
  points.forEach(([x, y]) => {
    if (x > columns) columns = x;
    if (y > rows) rows = y;
  });
  rows += 1;
  columns += 1;

  const grid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(columns).fill('.');
  }

  points.forEach(([x, y]) => {
    grid[y][x] = '#';
  });

  const [direction, line] = instructions[0];

  let count = 0;
  if (direction === 'y') {
    const top = grid.slice(0, line);
    const bottom = grid.slice(line + 1).reverse();
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < top.length; j++) {
        if (bottom[j][i] === '#') top[j][i] = '#';
        if (top[j][i] === '#') count += 1;
      }
    }
  } else if (direction === 'x') {
    const left = [];
    const right = [];
    grid.forEach((row) => {
      left.push(row.slice(0, line).reverse());
      right.push(row.slice(line + 1));
    });
    for (let i = 0; i < right.length; i++) {
      for (let j = 0; j < rows; j++) {
        if (left[j][i] === '#') right[j][i] = '#';
        if (right[j][i] === '#') count += 1;
      }
    }
  }

  return count;
};

export const solve2 = (input) => {
  return input;
};
