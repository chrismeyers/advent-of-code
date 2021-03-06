import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/04.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
`.trim();

  t.equal(solve1(input), 4512);
  t.equal(solve2(input), 1924);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/04.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 58374);
  t.equal(solve2(input), 11377);

  t.end();
});

tap.test('detects part 1 vertical win in first column', (t) => {
  const input = `
22,8,21,6,1,17,23,2,0,14,9,24,10,16,13,5,15,25,12,7,18,20,4,19,3,26,11

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19
`.trim();

  t.equal(solve1(input), 242);

  t.end();
});

tap.test('detects part 1 vertical win in non-first column', (t) => {
  const input = `
17,23,14,3,20,7,4,2,0,9,21,24,10,16,13,6,15,25,12,22,18,11,8,19,5,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19
`.trim();

  t.equal(solve1(input), 4460);

  t.end();
});
