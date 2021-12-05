export const solve1 = (input) => {
  const items = input
    .split('\n')
    .map((item) =>
      item.split('->').map((pair) => pair.trim().split(',').map(Number))
    );

  const points = new Map();
  for (let i = 0; i < items.length; i++) {
    const [[x1, y1], [x2, y2]] = items[i];

    if (x1 === x2) {
      points.set(
        `${x1},${y1}`,
        points.get(`${x1},${y1}`) ? points.get(`${x1},${y1}`) + 1 : 1
      );
      if (y1 < y2) {
        for (let j = y1 + 1; j < y2; j++) {
          points.set(
            `${x1},${j}`,
            points.get(`${x1},${j}`) ? points.get(`${x1},${j}`) + 1 : 1
          );
        }
      } else if (y1 > y2) {
        for (let j = y1 - 1; j > y2; j--) {
          points.set(
            `${x1},${j}`,
            points.get(`${x1},${j}`) ? points.get(`${x1},${j}`) + 1 : 1
          );
        }
      }
      points.set(
        `${x1},${y2}`,
        points.get(`${x1},${y2}`) ? points.get(`${x1},${y2}`) + 1 : 1
      );
    }
    if (y1 === y2) {
      points.set(
        `${x1},${y1}`,
        points.get(`${x1},${y1}`) ? points.get(`${x1},${y1}`) + 1 : 1
      );
      if (x1 < x2) {
        for (let j = x1 + 1; j < x2; j++) {
          points.set(
            `${j},${y1}`,
            points.get(`${j},${y1}`) ? points.get(`${j},${y1}`) + 1 : 1
          );
        }
      } else if (x1 > x2) {
        for (let j = x1 - 1; j > x2; j--) {
          points.set(
            `${j},${y1}`,
            points.get(`${j},${y1}`) ? points.get(`${j},${y1}`) + 1 : 1
          );
        }
      }
      points.set(
        `${x2},${y1}`,
        points.get(`${x2},${y1}`) ? points.get(`${x2},${y1}`) + 1 : 1
      );
    }
  }

  return Array.from(points.values()).filter((count) => count >= 2).length;
};

export const solve2 = (input) => {
  return input;
};
