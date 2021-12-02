module.exports.solve1 = (input) => {
  const items = input.split('\n');

  let position = 0;
  let depth = 0;
  items.forEach((item) => {
    const [action, amountStr] = item.split(' ');
    const amount = parseInt(amountStr, 10);

    // eslint-disable-next-line default-case
    switch (action) {
      case 'forward':
        position += amount;
        break;
      case 'down':
        depth += amount;
        break;
      case 'up':
        depth -= amount;
        break;
    }
  });

  return position * depth;
};

module.exports.solve2 = (input) => {
  const items = input.split('\n');

  let position = 0;
  let depth = 0;
  let aim = 0;
  items.forEach((item) => {
    const [action, amountStr] = item.split(' ');
    const amount = parseInt(amountStr, 10);

    // eslint-disable-next-line default-case
    switch (action) {
      case 'forward':
        position += amount;
        depth += aim * amount;
        break;
      case 'down':
        aim += amount;
        break;
      case 'up':
        aim -= amount;
        break;
    }
  });

  return position * depth;
};
