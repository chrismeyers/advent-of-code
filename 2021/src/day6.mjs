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
  const items = input.split(',').map(Number);

  let fishes = new Map();
  items.forEach((item) => {
    fishes.set(item, (fishes.get(item) ?? 0) + 1);
  });

  for (let i = 0; i < 256; i++) {
    const newFishes = new Map();
    fishes.forEach((v, k) => {
      if (k === 0) {
        newFishes.set(6, (newFishes.get(6) ?? 0) + v);
        newFishes.set(8, (newFishes.get(8) ?? 0) + v);
      } else {
        newFishes.set(k - 1, (newFishes.get(k - 1) ?? 0) + v);
      }
    });
    fishes = newFishes;
  }

  return Array.from(fishes.values()).reduce((acc, val) => acc + val);
};
