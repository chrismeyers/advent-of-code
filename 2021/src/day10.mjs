export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split(''));

  let sum = 0;
  items.forEach((line) => {
    const openings = [];
    line.forEach((char) => {
      // eslint-disable-next-line default-case
      switch (char) {
        case '(':
        case '[':
        case '{':
        case '<':
          openings.unshift(char);
          break;
        case ')':
          if (openings.shift() !== '(') sum += 3;
          break;
        case ']':
          if (openings.shift() !== '[') sum += 57;
          break;
        case '}':
          if (openings.shift() !== '{') sum += 1197;
          break;
        case '>':
          if (openings.shift() !== '<') sum += 25137;
          break;
      }
    });
  });

  return sum;
};

export const solve2 = (input) => {
  return input;
};
