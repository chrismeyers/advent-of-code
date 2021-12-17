import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/16.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  t.equal(solve1('8A004A801A8002F478'), 16);
  t.equal(solve1('620080001611562C8802118E34'), 12);
  t.equal(solve1('C0015000016115A2E0802F182340'), 23);
  t.equal(solve1('A0016C880162017C3686B18A3D4780'), 31);

  t.equal(solve2('C200B40A82'), 3);
  t.equal(solve2('04005AC33890'), 54);
  t.equal(solve2('880086C3E88112'), 7);
  t.equal(solve2('CE00C43D881120'), 9);
  t.equal(solve2('D8005AC2A8F0'), 1);
  t.equal(solve2('F600BC2D8F'), 0);
  t.equal(solve2('9C005AC2F8F0'), 0);
  t.equal(solve2('9C0141080250320F1802104A08'), 1);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/16.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 917);
  // t.equal(solve2(input), input);

  t.end();
});
