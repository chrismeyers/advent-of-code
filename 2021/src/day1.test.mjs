import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from './day1.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
199
200
208
210
200
207
240
269
260
263
`.trim();

  t.equal(solve1(input), 7);
  t.equal(solve2(input), 5);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day1.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 1448);
  t.equal(solve2(input), 1471);

  t.end();
});
