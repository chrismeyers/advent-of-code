module.exports.solve = (input) => {
  const items = input.split('\n');
  let prev;
  let increased = 0;

  items.forEach((item) => {
    const parsed = parseInt(item, 10);
    if (prev && parsed > prev) increased++;
    prev = parsed;
  });

  return increased;
};
