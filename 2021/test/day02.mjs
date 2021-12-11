import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day02.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`.trim();

  t.equal(solve1(input), 150);
  t.equal(solve2(input), 900);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day02.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 2147104);
  t.equal(solve2(input), 2044620088);

  t.end();
});
