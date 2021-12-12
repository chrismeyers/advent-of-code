import tap from 'tap';
import { Counter } from '../util.mjs';

tap.test('Counter', (t) => {
  t.test('initializes with no items', (tt) => {
    const counter = new Counter();

    tt.strictSame(counter.keys(), []);
    tt.strictSame(counter.values(), []);
    tt.equal(counter.data.get('apples'), undefined);

    tt.end();
  });

  t.test('initializes with items', (tt) => {
    const counter = new Counter(['apples', 'bananas']);

    tt.strictSame(counter.keys(), ['apples', 'bananas']);
    tt.strictSame(counter.values(), [1, 1]);

    tt.end();
  });

  t.test('increments items', (tt) => {
    const counter = new Counter(['apples']);

    counter.inc('apples');
    tt.equal(counter.data.get('apples'), 2);

    counter.inc('apples', 2);
    tt.equal(counter.data.get('apples'), 4);

    tt.end();
  });

  t.test('decrements items', (tt) => {
    const counter = new Counter(['apples']);

    counter.dec('apples');
    tt.equal(counter.data.get('apples'), 0);

    counter.inc('apples', 10);
    counter.dec('apples', 7);
    tt.equal(counter.data.get('apples'), 3);

    tt.end();
  });

  t.test('sets new items not specified in constructor', (tt) => {
    const counter = new Counter();

    counter.inc('apples');
    tt.equal(counter.data.get('apples'), 1);
    tt.strictSame(counter.keys(), ['apples']);
    tt.strictSame(counter.values(), [1]);

    tt.end();
  });

  t.test('exposes underlying Map', (tt) => {
    const counter = new Counter();

    tt.type(counter.data, Map);

    tt.end();
  });

  t.end();
});
