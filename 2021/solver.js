/* eslint-disable no-console */
const fs = require('fs');

if (process.argv.length < 3) {
  console.error(`usage: node solver.js problem`);
  process.exit(1);
}

(async () => {
  const problem = process.argv[2];
  try {
    const { solve } = await import(`${__dirname}/src/${problem}.js`);

    const inputFile = `${__dirname}/input/${problem}.txt`;
    let input;
    if (fs.existsSync(inputFile)) {
      input = fs.readFileSync(inputFile, { encoding: 'utf-8' }).trim();
    }

    const solution = solve(input);
    console.log(solution);
  } catch (error) {
    console.error(error.message);
  }
})();
