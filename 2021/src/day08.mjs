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
  const items = input.split('\n').map((item) => item.split(' | '));

  /**
   * Location indexes map to the following:
   *
   *    0000
   *   1    2
   *   1    2
   *    3333
   *   4    5
   *   4    5
   *    6666
   */
  let sum = 0;
  items.forEach(([first, second]) => {
    const locs = new Array(7).fill([]);
    first
      .split(' ')
      .sort((a, b) => a.length - b.length)
      .forEach((word) => {
        switch (word.length) {
          case 2: /* segments in digit '1' */ {
            const [c0, c1] = word.split('');
            locs[2] = [c0, c1];
            locs[5] = [c0, c1];
            break;
          }
          case 3: /* segments in digit '7' */ {
            const [c0] = word
              .replace(locs[2][0], '')
              .replace(locs[2][1], '')
              .replace(locs[5][0], '')
              .replace(locs[5][1], '')
              .split('');
            locs[0] = [c0];
            break;
          }
          case 4: /* segments in digit '4' */ {
            const [c0, c1] = word
              .replace(locs[0][0], '')
              .replace(locs[0][1], '')
              .replace(locs[2][0], '')
              .replace(locs[2][1], '')
              .replace(locs[5][0], '')
              .replace(locs[5][1], '')
              .split('');
            locs[1] = [c0, c1];
            locs[3] = [c0, c1];
            break;
          }
          case 7: /* segments in digit '8' */ {
            const [c0, c1] = word
              .replace(locs[0][0], '')
              .replace(locs[0][1], '')
              .replace(locs[1][0], '')
              .replace(locs[1][1], '')
              .replace(locs[2][0], '')
              .replace(locs[2][1], '')
              .replace(locs[3][0], '')
              .replace(locs[3][1], '')
              .replace(locs[5][0], '')
              .replace(locs[5][1], '')
              .split('');
            locs[6] = [c0, c1];
            locs[4] = [c0, c1];
            break;
          }
          default: {
            break;
          }
        }
      });

    const formations = locs.reduce((a, b) =>
      a.reduce((r, v) => r.concat(b.map((w) => [].concat(v, w))), [])
    );

    for (let i = 0; i < formations.length; i++) {
      const f = formations[i];

      const zero = [f[0], f[1], f[2], f[4], f[5], f[6]].sort().join('');
      const one = [f[2], f[5]].sort().join('');
      const two = [f[0], f[2], f[3], f[4], f[6]].sort().join('');
      const three = [f[0], f[2], f[3], f[5], f[6]].sort().join('');
      const four = [f[1], f[2], f[3], f[5]].sort().join('');
      const five = [f[0], f[1], f[3], f[5], f[6]].sort().join('');
      const six = [f[0], f[1], f[3], f[4], f[5], f[6]].sort().join('');
      const seven = [f[0], f[2], f[5]].sort().join('');
      const eight = [f[0], f[1], f[2], f[3], f[4], f[5], f[6]].sort().join('');
      const nine = [f[0], f[1], f[2], f[3], f[5], f[6]].sort().join('');

      let num = '';
      second.split(' ').forEach((word) => {
        const sorted = word.split('').sort().join('');
        switch (sorted) {
          case zero:
            num += '0';
            break;
          case one:
            num += '1';
            break;
          case two:
            num += '2';
            break;
          case three:
            num += '3';
            break;
          case four:
            num += '4';
            break;
          case five:
            num += '5';
            break;
          case six:
            num += '6';
            break;
          case seven:
            num += '7';
            break;
          case eight:
            num += '8';
            break;
          case nine:
            num += '9';
            break;
          default:
            break;
        }
      });
      if (num.length === 4) {
        sum += parseInt(num, 10);
        break;
      }
    }
  });

  return sum;
};
