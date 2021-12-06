export const solve1 = (input) => {
  const items = input.split(',').map(Number);

  for (let i = 0; i < 80; i++) {
    items.forEach((fish, index) => {
      if (fish - 1 < 0) {
        items[index] = 6;
        items.push(8);
      } else {
        items[index] = fish - 1;
      }
    });
  }

  return items.length;
};

export const solve2 = (input) => {
  return input;
};
