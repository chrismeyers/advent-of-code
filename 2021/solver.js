#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');

if (process.argv.length < 3) {
  console.error(`usage: node solver.js problem [part]`);
  process.exit(1);
}

(async () => {
  const problem = parseInt(process.argv[2], 10);
  const part = parseInt(process.argv[3], 10);
  try {
    const { solve1, solve2 } = await import(`${__dirname}/src/${problem}.js`);

    const inputFile = `${__dirname}/input/${problem}.txt`;
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
})();
