export const solve1 = (input) => {
  const items = input.split('');

  let binary = '';
  items.forEach((item) => {
    binary += Number(parseInt(item, 16)).toString(2).padStart(4, '0');
  });

  let state = 'version';
  let sum = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (binary.length === 0) break;
    // eslint-disable-next-line default-case
    switch (state) {
      case 'version': {
        const sliced = binary.slice(0, 3);
        binary = binary.substring(3);
        sum += parseInt(sliced, 2);
        state = 'type';
        break;
      }
      case 'type': {
        const sliced = binary.slice(0, 3);
        binary = binary.substring(3);
        state = parseInt(sliced, 2) === 4 ? 'literal' : 'operator';
        break;
      }
      case 'literal': {
        const sliced = binary.slice(0, 5);
        binary = binary.substring(5);
        if (sliced[0] === '0') {
          state = 'version';
        }
        break;
      }
      case 'operator': {
        const lengthType = binary.slice(0, 1);
        binary = binary.substring(1);
        if (lengthType === '0') {
          binary = binary.substring(15);
          state = 'version';
        } else {
          binary = binary.substring(11);
          state = 'version';
        }
        break;
      }
    }
  }

  return sum;
};

export const solve2 = (input) => {
  const items = input.split('');

  let binary = '';
  items.forEach((item) => {
    binary += Number(parseInt(item, 16)).toString(2).padStart(4, '0');
  });

  let state = 'version';
  let remaining = 0;
  let literal = '';
  const data = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (binary.length === 0) break;
    // eslint-disable-next-line default-case
    switch (state) {
      case 'version': {
        binary = binary.substring(3);
        remaining -= 3;
        state = 'type';
        break;
      }
      case 'type': {
        const sliced = binary.slice(0, 3);
        binary = binary.substring(3);
        remaining -= 3;
        const id = parseInt(sliced, 2);
        state = id === 4 ? 'literal' : 'operator';
        if (id !== 4 && binary.length > 0) {
          // eslint-disable-next-line default-case
          switch (id) {
            case 0:
              data.unshift('sum');
              break;
            case 1:
              data.unshift('product');
              break;
            case 2:
              data.unshift('min');
              break;
            case 3:
              data.unshift('max');
              break;
            case 5:
              data.unshift('gt');
              break;
            case 6:
              data.unshift('lt');
              break;
            case 7:
              data.unshift('eq');
              break;
          }
        }
        break;
      }
      case 'literal': {
        const sliced = binary.slice(0, 5);
        binary = binary.substring(5);
        remaining -= 5;
        literal += sliced.slice(1);
        if (sliced[0] === '0') {
          data.unshift(parseInt(literal, 2));
          literal = '';
          state = remaining === 0 ? 'cleanup' : 'version';
        }
        break;
      }
      case 'operator': {
        const lengthType = binary.slice(0, 1);
        binary = binary.substring(1);
        remaining -= 1;
        if (lengthType === '0') {
          const length = binary.slice(0, 15);
          binary = binary.substring(15);
          remaining = parseInt(length, 2);
          state = 'version';
        } else {
          const count = binary.slice(0, 11);
          binary = binary.substring(11);
          remaining = parseInt(count, 2) * 11;
          state = 'version';
        }
        break;
      }
      case 'cleanup': {
        if (remaining > 0) {
          binary = binary.substring(1);
          remaining -= 1;
        } else {
          state = 'version';
        }
      }
    }
  }

  let result;
  let tmp = [];
  const operands = [];
  while (data.length > 0) {
    const current = data.shift();
    switch (current) {
      case 'sum':
        operands.unshift(tmp.reduce((acc, cur) => acc + cur, 0));
        tmp = [];
        break;
      case 'product':
        operands.unshift(tmp.reduce((acc, cur) => acc * cur, 1));
        tmp = [];
        break;
      case 'min':
        operands.unshift(Math.min(...tmp));
        tmp = [];
        break;
      case 'max':
        operands.unshift(Math.max(...tmp));
        tmp = [];
        break;
      case 'gt': {
        const a = operands.shift() ?? tmp.shift();
        const b = operands.shift() ?? tmp.shift();
        operands.unshift(a > b ? 1 : 0);
        break;
      }
      case 'lt': {
        const a = operands.shift() ?? tmp.shift();
        const b = operands.shift() ?? tmp.shift();
        operands.unshift(a < b ? 1 : 0);
        break;
      }
      case 'eq': {
        const a = operands.shift() ?? tmp.shift();
        const b = operands.shift() ?? tmp.shift();
        operands.unshift(a === b ? 1 : 0);
        break;
      }
      default:
        tmp.unshift(current);
        break;
    }
    if (
      data.length === 0 &&
      operands.length === 1 &&
      Number.isInteger(operands[0])
    )
      result = operands.shift();
  }

  return result;
};
