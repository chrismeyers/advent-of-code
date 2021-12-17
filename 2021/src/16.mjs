export const solve1 = (input) => {
  const items = input.split('');

  let binary = '';
  items.forEach((item) => {
    binary += Number(parseInt(item, 16)).toString(2).padStart(4, '0');
  });

  let state = 'version';
  let sum = 0;
  let sub = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (binary.length === 0) break;
    // eslint-disable-next-line default-case
    switch (state) {
      case 'version': {
        const sliced = binary.slice(0, 3);
        binary = binary.substring(3);
        sum += parseInt(sliced, 2);
        sub -= 3;
        state = 'type';
        break;
      }
      case 'type': {
        const sliced = binary.slice(0, 3);
        binary = binary.substring(3);
        state = parseInt(sliced, 2) === 4 ? 'literal' : 'operator';
        sub -= 3;
        break;
      }
      case 'literal': {
        const sliced = binary.slice(0, 5);
        binary = binary.substring(5);
        sub -= 5;
        if (sliced[0] === '0') {
          state = 'version';
        }
        break;
      }
      case 'operator': {
        const lengthType = binary.slice(0, 1);
        binary = binary.substring(1);
        if (lengthType === '0') {
          const length = binary.slice(0, 15);
          binary = binary.substring(15);
          sub = parseInt(length, 2);
          state = 'version';
        } else {
          const count = binary.slice(0, 11);
          binary = binary.substring(11);
          sub = parseInt(count, 2) * 11;
          state = 'version';
        }
        break;
      }
      case 'cleanup': {
        binary = binary.substring(1);
        break;
      }
    }
  }

  return sum;
};

export const solve2 = (input) => {
  return input;
};
