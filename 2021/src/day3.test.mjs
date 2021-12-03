import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from './day3.mjs';
import { dirname } from '../util.mjs';

let input = `
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
tap.equal(solve1(input), 198);
tap.equal(solve2(input), 230);

input = fs
  .readFileSync(`${dirname(import.meta.url)}/../input/day3.txt`, {
    encoding: 'utf-8',
  })
  .trim();
tap.equal(solve1(input), 2967914);
tap.equal(solve2(input), 7041258);
