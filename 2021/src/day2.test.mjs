import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from './day2.mjs';
import { dirname } from '../util.mjs';

let input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`.trim();
tap.equal(solve1(input), 150);
tap.equal(solve2(input), 900);

input = fs
  .readFileSync(`${dirname(import.meta.url)}/../input/day2.txt`, {
    encoding: 'utf-8',
  })
  .trim();
tap.equal(solve1(input), 2147104);
tap.equal(solve2(input), 2044620088);
