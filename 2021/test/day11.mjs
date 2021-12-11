import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day11.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`.trim();

  t.equal(solve1(input), 1656);
  t.equal(solve2(input), 195);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day11.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 1632);
  t.equal(solve2(input), 303);

  t.end();
});
