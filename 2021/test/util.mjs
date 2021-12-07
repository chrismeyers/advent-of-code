import tap from 'tap';
import { Counter } from '../util.mjs';

tap.test('Counter initializes with no items', (t) => {
  const counter = new Counter();

  t.strictSame(counter.keys(), []);
  t.strictSame(counter.values(), []);
  t.equal(counter.get('apples'), undefined);

  t.end();
});

tap.test('Counter initializes with items', (t) => {
  const counter = new Counter(['apples', 'bananas']);

  t.strictSame(counter.keys(), ['apples', 'bananas']);
  t.strictSame(counter.values(), [1, 1]);

  t.end();
});

tap.test('Counter increments items', (t) => {
  const counter = new Counter(['apples']);

  counter.inc('apples');
  t.equal(counter.get('apples'), 2);

  counter.inc('apples', 2);
  t.equal(counter.get('apples'), 4);

  t.end();
});

tap.test('Counter sets new items not specified in constructor', (t) => {
  const counter = new Counter();

  counter.inc('apples');
  t.equal(counter.get('apples'), 1);
  t.strictSame(counter.keys(), ['apples']);
  t.strictSame(counter.values(), [1]);

  t.end();
});

tap.test('Counter loops over all items', (t) => {
  const counter = new Counter(['a', 'b', 'c', 'd']);

  const results = {};
  counter.forEach((v, k) => {
    results[k] = v;
  });

  t.strictSame(results, { a: 1, b: 1, c: 1, d: 1 });

  t.end();
});
