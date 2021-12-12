import { Counter } from '../util.mjs';

export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split('-'));

  // Build adjacency list
  const adj = new Map();
  items.forEach(([a, b]) => {
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push(b);
    adj.get(b).push(a);
  });

  let paths = 0;
  const walk = (node, smalls) => {
    if (node.toLowerCase() === node && smalls.data.get(node) > 0) return;

    if (node === 'end') {
      paths += 1;
      return;
    }

    smalls.inc(node);

    for (let i = 0; i < adj.get(node).length; i++) {
      walk(adj.get(node)[i], smalls);
    }

    smalls.dec(node);
  };

  walk('start', new Counter());

  return paths;
};

export const solve2 = (input) => {
  return input;
};
