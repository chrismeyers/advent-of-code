const tap = require('tap');
const { solve1 } = require('./1');

const input = `
199
200
208
210
200
207
240
269
260
263
`.trim();

tap.equal(solve1(input), 7);
