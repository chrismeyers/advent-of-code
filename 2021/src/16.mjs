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
  let sub = [];
  const ops = [];
  const subs = [];
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
              ops.unshift('sum');
              break;
            case 1:
              ops.unshift('product');
              break;
            case 2:
              ops.unshift('min');
              break;
            case 3:
              ops.unshift('max');
              break;
            case 5:
              ops.unshift('gt');
              break;
            case 6:
              ops.unshift('lt');
              break;
            case 7:
              ops.unshift('eq');
              break;
          }
        }
        break;
      }
      case 'literal': {
        const sliced = binary.slice(0, 5);
        binary = binary.substring(5);
        remaining -= 5;
        sub.push(parseInt(sliced.slice(1), 2));
        if (sliced[0] === '0') {
          state = 'version';
        }
        if (remaining === 0) {
          subs.unshift(sub);
          sub = [];
        }
        break;
      }
      case 'operator': {
        const lengthType = binary.slice(0, 1);
        binary = binary.substring(1);
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
    }
  }

  const results = [];
  const comparators = [];
  for (let i = 0; i < ops.length; i++) {
    const current = subs.shift();
    // eslint-disable-next-line default-case
    switch (ops[i]) {
      case 'sum':
        results.unshift(current.reduce((acc, cur) => acc + cur, 0));
        break;
      case 'product':
        results.unshift(current.reduce((acc, cur) => acc * cur, 1));
        break;
      case 'min':
        results.unshift(Math.min(...current));
        break;
      case 'max':
        results.unshift(Math.max(...current));
        break;
      case 'gt':
      case 'lt':
      case 'eq':
        if (results.length === 0) results.unshift(...current);
        comparators.unshift(ops[i]);
        break;
    }
  }

  for (let i = 0; i < comparators.length; i++) {
    const a = results.shift();
    const b = results.shift();
    // eslint-disable-next-line default-case
    switch (comparators[i]) {
      case 'gt':
        results.push(a > b ? 1 : 0);
        break;
      case 'lt':
        results.push(a < b ? 1 : 0);
        break;
      case 'eq':
        results.push(a === b ? 1 : 0);
        break;
    }
  }

  return results[0];
};
