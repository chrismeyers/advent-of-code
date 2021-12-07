import { Counter } from '../util.mjs';

export const solve1 = (input) => {
  const items = input
    .split('\n')
    .map((item) =>
      item.split('->').map((pair) => pair.trim().split(',').map(Number))
    );

  const points = new Counter();
  for (let i = 0; i < items.length; i++) {
    const [[x1, y1], [x2, y2]] = items[i];

    if (x1 === x2) {
      // Vertical
      points.inc(`${x1},${y1}`);
      if (y1 < y2) {
        for (let j = y1 + 1; j < y2; j++) {
          points.inc(`${x1},${j}`);
        }
      } else if (y1 > y2) {
        for (let j = y1 - 1; j > y2; j--) {
          points.inc(`${x1},${j}`);
        }
      }
      points.inc(`${x1},${y2}`);
    }
    if (y1 === y2) {
      // Horizontal
      points.inc(`${x1},${y1}`);
      if (x1 < x2) {
        for (let j = x1 + 1; j < x2; j++) {
          points.inc(`${j},${y1}`);
        }
      } else if (x1 > x2) {
        for (let j = x1 - 1; j > x2; j--) {
          points.inc(`${j},${y1}`);
        }
      }
      points.inc(`${x2},${y1}`);
    }
  }

  return points.values().filter((count) => count >= 2).length;
};

export const solve2 = (input) => {
  const items = input
    .split('\n')
    .map((item) =>
      item.split('->').map((pair) => pair.trim().split(',').map(Number))
    );

  const points = new Counter();
  for (let i = 0; i < items.length; i++) {
    const [[x1, y1], [x2, y2]] = items[i];

    if (x1 === x2) {
      // Vertical
      points.inc(`${x1},${y1}`);
      if (y1 < y2) {
        for (let j = y1 + 1; j < y2; j++) {
          points.inc(`${x1},${j}`);
        }
      } else if (y1 > y2) {
        for (let j = y1 - 1; j > y2; j--) {
          points.inc(`${x1},${j}`);
        }
      }
      points.inc(`${x1},${y2}`);
    } else if (y1 === y2) {
      // Horizontal
      points.inc(`${x1},${y1}`);
      if (x1 < x2) {
        for (let j = x1 + 1; j < x2; j++) {
          points.inc(`${j},${y1}`);
        }
      } else if (x1 > x2) {
        for (let j = x1 - 1; j > x2; j--) {
          points.inc(`${j},${y1}`);
        }
      }
      points.inc(`${x2},${y1}`);
    } else {
      // Diagonal
      points.inc(`${x1},${y1}`);
      if (x1 < x2 && y1 > y2) {
        // Up to the right
        for (let j = x1 + 1; j < x2; j++) {
          points.inc(`${j},${y1 - (j - x1)}`);
        }
      } else if (x1 < x2 && y1 < y2) {
        // Down to the right
        for (let j = x1 + 1; j < x2; j++) {
          points.inc(`${j},${y1 + (j - x1)}`);
        }
      } else if (x1 > x2 && y1 > y2) {
        // Up to the left
        for (let j = x1 - 1; j > x2; j--) {
          points.inc(`${j},${y1 - (x1 - j)}`);
        }
      } else if (x1 > x2 && y1 < y2) {
        // Down to the left
        for (let j = x1 - 1; j > x2; j--) {
          points.inc(`${j},${y1 + (x1 - j)}`);
        }
      }
      points.inc(`${x2},${y2}`);
    }
  }

  return points.values().filter((count) => count >= 2).length;
};
