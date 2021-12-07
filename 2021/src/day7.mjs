export const solve1 = (input) => {
  const items = input.split(',').map(Number);

  let cost;
  for (let i = 0; i < items.length; i++) {
    let amount = 0;
    for (let j = 0; j < items.length; j++) {
      amount += Math.abs(items[j] - items[i]);
    }
    if (!cost || amount < cost) cost = amount;
  }

  return cost;
};

export const solve2 = (input) => {
  return input;
};
