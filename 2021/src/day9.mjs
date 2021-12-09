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
  return input;
};
