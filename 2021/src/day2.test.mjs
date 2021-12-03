import tap from 'tap';
import { solve1, solve2 } from './day2.mjs';

const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`.trim();

tap.equal(solve1(input), 150);
tap.equal(solve2(input), 900);
