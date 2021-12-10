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
  const items = input.split('\n').map((item) => item.split(''));

  const scores = [];
  items.forEach((line) => {
    let sum = 0;
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

    // Valid but incomplete
    if (sum === 0) {
      let score = 0;
      openings.forEach((opening) => {
        score *= 5;
        if (opening === '(') score += 1;
        if (opening === '[') score += 2;
        if (opening === '{') score += 3;
        if (opening === '<') score += 4;
      });
      scores.push(score);
    }
  });

  return scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];
};
