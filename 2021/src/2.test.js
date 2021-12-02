const tap = require('tap');
const { solve1 } = require('./2');

const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`.trim();

tap.equal(solve1(input), 150);
