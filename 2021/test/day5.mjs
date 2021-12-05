import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day5.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`.trim();

  t.equal(solve1(input), 5);
  t.equal(solve2(input), input);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day5.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 8622);
  t.equal(solve2(input), input);

  t.end();
});
