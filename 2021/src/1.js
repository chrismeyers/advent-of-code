module.exports.solve1 = (input) => {
  const items = input.split('\n');
  let prev;
  let increased = 0;

  items.forEach((item) => {
    const parsed = parseInt(item, 10);
    if (prev && parsed > prev) increased += 1;
    prev = parsed;
  });

  return increased;
};

module.exports.solve2 = (input) => {
  const items = input.split('\n').map((item) => parseInt(item, 10));

  const sums = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < items.length - 2; i++) {
    sums.push(items[i] + items[i + 1] + items[i + 2]);
  }

  let prev;
  let increased = 0;
  sums.forEach((item) => {
    if (prev && item > prev) increased += 1;
    prev = item;
  });

  return increased;
};
