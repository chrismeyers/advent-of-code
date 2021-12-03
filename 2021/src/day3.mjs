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
  const items = input.split('\n').map((item) => item.split(''));

  const chars = items[0].length;

  let oxygen = [...items];
  for (let i = 0; i < chars; i++) {
    if (oxygen.length === 1) break;
    const startWithOne = [];
    const startWithZero = [];
    for (let j = 0; j < oxygen.length; j++) {
      if (oxygen[j][i] === '1') {
        startWithOne.push(oxygen[j]);
      } else {
        startWithZero.push(oxygen[j]);
      }
    }
    if (startWithOne.length > startWithZero.length) {
      oxygen = startWithOne;
    } else if (startWithOne.length < startWithZero.length) {
      oxygen = startWithZero;
    } else {
      oxygen = startWithOne;
    }
  }

  let co2 = [...items];
  for (let i = 0; i < chars; i++) {
    if (co2.length === 1) break;
    const startWithOne = [];
    const startWithZero = [];
    for (let j = 0; j < co2.length; j++) {
      if (co2[j][i] === '1') {
        startWithOne.push(co2[j]);
      } else {
        startWithZero.push(co2[j]);
      }
    }
    if (startWithOne.length > startWithZero.length) {
      co2 = startWithZero;
    } else if (startWithOne.length < startWithZero.length) {
      co2 = startWithOne;
    } else {
      co2 = startWithZero;
    }
  }

  return parseInt(oxygen[0].join(''), 2) * parseInt(co2[0].join(''), 2);
};
