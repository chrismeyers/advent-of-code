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
  return input;
};
