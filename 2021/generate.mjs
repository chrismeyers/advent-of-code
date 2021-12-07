#!/usr/bin/env node
/* eslint-disable no-console */
import fs from 'fs';
import * as readline from 'node:readline/promises'; // eslint-disable-line import/no-unresolved
import { stdin as input, stdout as output } from 'process';
import { dirname } from './util.mjs';

if (process.argv.length < 3) {
  console.error(`usage: node generate.mjs day`);
  process.exit(1);
}

const day = parseInt(process.argv[2], 10);

const rl = readline.createInterface({ input, output });
const affirmative = (value) => ['y', 'yes'].includes(value.toLowerCase());

const files = [
  {
    path: `${dirname(import.meta.url)}/input/day${day}.txt`,
    template: '',
    prompt: 'input file',
    message: 'empty input file',
  },
  {
    path: `${dirname(import.meta.url)}/src/day${day}.mjs`,
    template: `export const solve1 = (input) => {
  return input;
};

export const solve2 = (input) => {
  return input;
};
`,
    prompt: 'source file',
    message: 'source template',
  },
  {
    path: `${dirname(import.meta.url)}/test/day${day}.mjs`,
    template: `import fs from 'fs';
import tap from 'tap';
import { solve1, solve2 } from '../src/day${day}.mjs';
import { dirname } from '../util.mjs';

tap.test('works with example input', (t) => {
  const input = '';

  t.equal(solve1(input), input);
  t.equal(solve2(input), input);

  t.end();
});

tap.test('works with puzzle input', (t) => {
  const input = fs
    .readFileSync(\`\${dirname(import.meta.url)}/../input/day${day}.txt\`, {
      encoding: 'utf-8',
    })
    .trim();

  t.equal(solve1(input), input);
  t.equal(solve2(input), input);

  t.end();
});
`,
    prompt: 'test file',
    message: 'test template',
  },
];

// eslint-disable-next-line no-restricted-syntax
for (const { path, template, prompt, message } of files) {
  let answer;
  if (fs.existsSync(path)) {
    // eslint-disable-next-line no-await-in-loop
    answer = await rl.question(
      `Day ${day} ${prompt} already exists. Overwrite? [y/N] `
    );
  }
  if (answer === undefined || affirmative(answer)) {
    fs.writeFileSync(path, template);
    console.log(`Created ${message} for day ${day}`);
  }
}

rl.close();
