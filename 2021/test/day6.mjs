import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day6.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = '3,4,3,1,2';

  t.equal(solve1(input), 5934);
  t.equal(solve2(input), input);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day6.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 352151);
  t.equal(solve2(input), input);

  t.end();
});
