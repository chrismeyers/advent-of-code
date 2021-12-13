import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/12.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  let input = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`.trim();

  t.equal(solve1(input), 10);
  t.equal(solve2(input), 36);

  input = `
dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`.trim();

  t.equal(solve1(input), 19);
  t.equal(solve2(input), 103);

  input = `
fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
  `.trim();

  t.equal(solve1(input), 226);
  t.equal(solve2(input), 3509);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/12.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 3292);
  t.equal(solve2(input), 89592);

  t.end();
});
