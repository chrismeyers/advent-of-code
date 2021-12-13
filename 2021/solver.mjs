#!/usr/bin/env node
/* eslint-disable no-console */
import fs from 'node:fs';
import { dirname } from './util.mjs';

if (process.argv.length < 3) {
  console.error(`usage: node solver.mjs day [part]`);
  process.exit(1);
}

const day = String(process.argv[2]).padStart(2, '0');
const part = parseInt(process.argv[3], 10);

let solve1;
let solve2;
try {
  ({ solve1, solve2 } = await import(
    `${dirname(import.meta.url)}/src/${day}.mjs`
  ));
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const inputFile = `${dirname(import.meta.url)}/input/${day}.txt`;
if (!fs.existsSync(inputFile)) {
  console.error(`Input file '${inputFile}' does not exist`);
  process.exit(1);
}
const input = fs.readFileSync(inputFile, { encoding: 'utf-8' }).trim();

if (Number.isNaN(part) || part === 1) {
  console.log(solve1(input));
}
if (Number.isNaN(part) || part === 2) {
  console.log(solve2(input));
}
