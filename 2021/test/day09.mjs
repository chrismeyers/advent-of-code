import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day09.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
2199943210
3987894921
9856789892
8767896789
9899965678
`.trim();

  t.equal(solve1(input), 15);
  t.equal(solve2(input), 1134);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day09.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 528);
  t.equal(solve2(input), 920448);

  t.end();
});
