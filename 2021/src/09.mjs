export const solve1 = (input) => {
  const items = input.split('\n');

  const columns = items[0].length;

  const flattened = input.replaceAll('\n', '').split('').map(Number);

  let sum = 0;
  flattened.forEach((height, i, arr) => {
    const left = i % columns !== 0 ? arr[i - 1] : undefined;
    const right = i % columns !== columns - 1 ? arr[i + 1] : undefined;
    const up = arr[i - columns];
    const down = arr[i + columns];
    if (
      (left !== undefined ? height < left : true) &&
      (right !== undefined ? height < right : true) &&
      (up !== undefined ? height < up : true) &&
      (down !== undefined ? height < down : true)
    ) {
      sum += height + 1;
    }
  });

  return sum;
};

export const solve2 = (input) => {
  const items = input.split('\n').map((item) => item.split('').map(Number));

  const columns = items[0].length;
  const rows = items.length;

  const basins = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (items[i][j] < 9) {
        let size = 0;
        const points = [[j, i]];
        items[i][j] += 9; // Invalidate cell to prevent infinite loop

        while (points.length > 0) {
          size += 1;
          const [x, y] = points.pop();

          // Left
          if (x - 1 >= 0 && items[y][x - 1] < 9) {
            items[y][x - 1] += 9;
            points.push([x - 1, y]);
          }
          // Right
          if (x + 1 <= columns - 1 && items[y][x + 1] < 9) {
            items[y][x + 1] += 9;
            points.push([x + 1, y]);
          }
          // Up
          if (y - 1 >= 0 && items[y - 1][x] < 9) {
            items[y - 1][x] += 9;
            points.push([x, y - 1]);
          }
          // Down
          if (y + 1 <= rows - 1 && items[y + 1][x] < 9) {
            items[y + 1][x] += 9;
            points.push([x, y + 1]);
          }
        }

        basins.push(size);
      }
    }
  }

  const product = basins
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, val) => acc * val, 1);

  return product;
};
