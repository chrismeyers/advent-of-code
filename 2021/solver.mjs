#!/usr/bin/env node
/* eslint-disable no-console */
import fs from 'fs';
import { dirname } from './util.mjs';

if (process.argv.length < 3) {
  console.error(`usage: node solver.mjs day [part]`);
  process.exit(1);
}

const day = parseInt(process.argv[2], 10);
const part = parseInt(process.argv[3], 10);
try {
  const { solve1, solve2 } = await import(
    `${dirname(import.meta.url)}/src/day${day}.mjs`
  );

  const inputFile = `${dirname(import.meta.url)}/input/day${day}.txt`;
  let input;
  if (fs.existsSync(inputFile)) {
    input = fs.readFileSync(inputFile, { encoding: 'utf-8' }).trim();
  }

  if (Number.isNaN(part) || part === 1) {
    console.log(solve1(input));
  }
  if (Number.isNaN(part) || part === 2) {
    console.log(solve2(input));
  }
} catch (error) {
  console.error(error.message);
}
