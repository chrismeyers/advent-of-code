export const solve1 = (input) => {
  const items = input.split('\n').map((item) => item.split(' | '));

  let count = 0;
  items.forEach(([, second]) => {
    second.split(' ').forEach((word) => {
      if (
        [
          2, // segments in digit '1'
          4, // segments in digit '4'
          3, // segments in digit '7'
          7, // segments in digit '8'
        ].includes(word.length)
      ) {
        count += 1;
      }
    });
  });

  return count;
};

export const solve2 = (input) => {
  return input;
};
