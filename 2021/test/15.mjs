import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/15.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581
`.trim();

  t.equal(solve1(input), 40);
  t.equal(solve2(input), 315);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/15.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 613);
  t.equal(solve2(input), 2899);

  t.end();
});
