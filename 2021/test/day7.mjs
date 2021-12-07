import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day7.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = '16,1,2,0,4,2,7,1,2,14';

  t.equal(solve1(input), 37);
  t.equal(solve2(input), input);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day7.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 352707);
  t.equal(solve2(input), input);

  t.end();
});
