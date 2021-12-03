import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from './day1.mjs';
import { dirname } from '../util.mjs';

let input = `
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
tap.equal(solve1(input), 7);
tap.equal(solve2(input), 5);

input = fs
  .readFileSync(`${dirname(import.meta.url)}/../input/day1.txt`, {
    encoding: 'utf-8',
  })
  .trim();
tap.equal(solve1(input), 1448);
tap.equal(solve2(input), 1471);
