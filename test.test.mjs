import assert from 'node:assert';
import { describe, it } from 'node:test';
import freq from './lib/stringfreq.js';

describe('freq', () => {
  it('should return empty array for empty input', () => {
    const result = freq([]);
    assert.deepStrictEqual(result, []);
  });

  it('should handle single-character tokens', () => {
    const result = freq(['a', 'b', 'a']);
    assert.deepStrictEqual(result, [['a', 2], ['b', 1]]);
  });

  it('should respect a custom delimiter (same-frequency tokens sorted by name)', () => {
    const result = freq(['foo,bar,baz', 'foo,bar'], ',');
    // foo and bar both have count 2; sort by frequency desc, then name asc
    assert.strictEqual(result[0][1], 2);
    assert.strictEqual(result[1][1], 2);
    assert.strictEqual(result[2][1], 1);
  });

  it('should count token frequencies in descending order', () => {
    const result = freq(['apple banana apple cherry banana apple']);
    assert.deepStrictEqual(result, [['apple', 3], ['banana', 2], ['cherry', 1]]);
  });

  it('should treat a single string input as one-element array', () => {
    const result = freq('alpha beta alpha');
    assert.deepStrictEqual(result, [['alpha', 2], ['beta', 1]]);
  });
});
