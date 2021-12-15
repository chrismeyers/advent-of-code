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
  const items = input.split(/\n\s*\n/);

  const polymer = items[0];
  const pairs = new Map();
  items[1].split('\n').forEach((item) => {
    const [a, b] = item.split(' -> ');
    pairs.set(a, b);
  });

  const chunks = [];
  for (let j = 0; j < polymer.length - 1; j++) {
    chunks.push(polymer.slice(j, j + 2));
  }

  let counts = new Counter(chunks);
  for (let i = 0; i < 40; i++) {
    const newCounts = new Counter();
    counts.data.forEach((v, k) => {
      const center = pairs.get(k);
      const [left, right] = k.split('');
      newCounts.inc(`${left}${center}`, v);
      newCounts.inc(`${center}${right}`, v);
    });
    counts = newCounts;
  }

  const letters = new Counter();
  counts.keys().forEach((key) => {
    const [left, right] = key.split('');
    letters.inc(left, counts.data.get(key));
    letters.inc(right, counts.data.get(key));
  });

  letters.inc(polymer[0]);
  letters.inc(polymer[polymer.length - 1]);

  const results = letters
    .values()
    .map((v) => v / 2)
    .sort((a, b) => b - a);

  return results[0] - results[results.length - 1];
};
