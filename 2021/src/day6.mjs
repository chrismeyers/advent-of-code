import { Counter } from '../util.mjs';

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

  let fishes = new Counter(items);
  for (let i = 0; i < 256; i++) {
    const newFishes = new Counter();
    fishes.forEach((v, k) => {
      if (k === 0) {
        newFishes.inc(6, v);
        newFishes.inc(8, v);
      } else {
        newFishes.inc(k - 1, v);
      }
    });
    fishes = newFishes;
  }

  return fishes.values().reduce((acc, val) => acc + val);
};
