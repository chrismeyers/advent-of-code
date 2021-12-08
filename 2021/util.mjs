import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Replacement for missing __dirname variable when using ESM
 *
 * @param {string} url File URL
 * @returns {string} Absolute path based on given file URL
 */
export const dirname = (url) => path.dirname(fileURLToPath(url));

/**
 * Map wrapper class with elements stored as keys and their counts stored as
 * values
 */
export class Counter {
  data = new Map();

  /**
   * @param {any[]} [items=[]] Optional array of initial elements
   */
  constructor(items = []) {
    items.forEach((item) => {
      this.inc(item);
    });
  }

  /**
   * Increments the given item by the given amount
   *
   * @param {any} item Item to increment or initialize
   * @param {number} [amount=1] Amount to increment item by
   */
  inc(item, amount = 1) {
    this.data.set(item, (this.data.get(item) ?? 0) + amount);
  }

  /**
   * Returns all the keys in the collection
   *
   * @returns {any[]} Keys in the collection
   */
  keys() {
    return Array.from(this.data.keys());
  }

  /**
   * Returns all the values in the collection
   *
   * @returns {any[]} Values in the collection
   */
  values() {
    return Array.from(this.data.values());
  }
}
