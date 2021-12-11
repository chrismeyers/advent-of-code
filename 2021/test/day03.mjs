import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day03.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`.trim();

  t.equal(solve1(input), 198);
  t.equal(solve2(input), 230);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  let input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day03.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 2967914);
  t.equal(solve2(input), 7041258);

  input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day03.alt.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 3549854);
  t.equal(solve2(input), 3765399);

  t.end();
});
