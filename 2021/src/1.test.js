const assert = require('assert');
const { solve } = require('./1');

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

try {
  const expected = 77;
  const actual = solve(input);
  assert.strictEqual(
    actual,
    expected,
    `actual ${actual} !== expected ${expected}`
  );
} catch (error) {
  console.error(__filename);
  console.error(`  ${error.message}`);
  process.exit(1);
}
