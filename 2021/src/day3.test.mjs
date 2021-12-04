import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from './day3.mjs';
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
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day3.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 2967914);
  t.equal(solve2(input), 7041258);

  t.end();
});
