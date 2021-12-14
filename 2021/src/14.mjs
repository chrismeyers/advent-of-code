import { Counter } from '../util.mjs';

export const solve1 = (input) => {
  const items = input.split(/\n\s*\n/);

  let polymer = items[0];
  const pairs = new Map();
  items[1].split('\n').forEach((item) => {
    const [a, b] = item.split(' -> ');
    pairs.set(a, b);
  });

  for (let i = 0; i < 10; i++) {
    const chunks = [];
    for (let j = 0; j < polymer.length - 1; j++) {
      chunks.push(polymer.slice(j, j + 2));
    }

    const spliced = [];
    chunks.forEach((chunk) => {
      if (pairs.has(chunk)) spliced.push(pairs.get(chunk));
    });

    const polymers = polymer.split('');
    spliced.forEach((val, index) => {
      polymers.splice(index * 2 + 1, 0, val);
    });

    polymer = polymers.join('');
  }

  const counts = new Counter();
  polymer.split('').forEach((letter) => counts.inc(letter));

  const sorted = counts.values().sort((a, b) => b - a);

  return sorted[0] - sorted[sorted.length - 1];
};

export const solve2 = (input) => {
  return input;
};
