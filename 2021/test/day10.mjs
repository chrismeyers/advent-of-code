import fs from 'node:fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day10.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = `
[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]
`.trim();

  t.equal(solve1(input), 26397);
  t.equal(solve2(input), 288957);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(`${dirname(import.meta.url)}/../input/day10.txt`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), 319329);
  t.equal(solve2(input), 3515583998);

  t.end();
});
