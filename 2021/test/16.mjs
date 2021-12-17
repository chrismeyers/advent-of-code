import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/16.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  t.equal(solve1('8A004A801A8002F478'), 16);
  t.equal(solve1('620080001611562C8802118E34'), 12);
  t.equal(solve1('C0015000016115A2E0802F182340'), 23);
  t.equal(solve1('A0016C880162017C3686B18A3D4780'), 31);
  t.equal(solve2(''), '');

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/16.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 917);
  t.equal(solve2(input), input);

  t.end();
});
