import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/13.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5
`.trim();

  t.equal(solve1(input), 17);
  t.equal(solve2(input), input);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/13.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 621);
  t.equal(solve2(input), input);

  t.end();
});
