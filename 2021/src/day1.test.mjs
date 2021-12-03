import tap from 'tap';
import { solve1, solve2 } from './day1.mjs';

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

tap.equal(solve1(input), 7);
tap.equal(solve2(input), 5);
