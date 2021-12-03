export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split(''));

  const chars = items[0].length;
  const lines = items.length;

  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < chars; i++) {
    let ones = 0;
    for (let j = 0; j < lines; j++) {
      if (items[j][i] === '1') ones += 1;
    }
    if (ones > Math.floor(lines / 2)) {
      gamma += '1';
      epsilon += '0';
    } else {
      gamma += '0';
      epsilon += '1';
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

export const solve2 = (input) => {
  return input;
};
