import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/14.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`.trim();

  t.equal(solve1(input), 1588);
  t.equal(solve2(input), 2188189693529);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/14.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 4244);
  t.equal(solve2(input), 4807056953866);

  t.end();
});
