import { subjectiveRange } from './subjective-range.js';

describe('infinite extents', () => {
  const range = subjectiveRange([
    { boundary: -Infinity, label: 'negative' },
    { boundary: 0, label: 'non-negative' },
  ]);

  test.each([
    [-Infinity, 'negative'],
    [-100000, 'negative'],
    [-10, 'negative'],
    [-0.00000001, 'negative'],
    [0, 'non-negative'],
    [10, 'non-negative'],
    [10000000000, 'non-negative'],
  ])('%f => %s', (value, expected) => {
    expect(range(value)).toEqual(expected);
  });
});

describe('minimum value defined (0)', () => {
  const range = subjectiveRange([
    { boundary: 0, label: 'none' },
    { boundary: 1, label: 'one' },
    { boundary: 2, label: 'more than one' },
  ]);

  test.each([-1000, -100, -10, -1, -0.00001])('%f => throws', (value) => {
    expect(() => range(value)).toThrow(/less than minimum/);
  });

  test.each([
    [0, 'none'],
    [1, 'one'],
    [2, 'more than one'],
    [3, 'more than one'],
    [100000, 'more than one'],
  ])('%f => %s', (value, expected) => {
    expect(range(value)).toEqual(expected);
  });
});

describe('maximum value defined (100)', () => {
  const range = subjectiveRange([
    { boundary: -Infinity, label: 'negative' },
    { boundary: 0, label: 'non-negative' },
    { boundary: 100, max: true },
  ]);

  test.each([
    [-1000, 'negative'],
    [-1, 'negative'],
    [-0.000001, 'negative'],
    [0, 'non-negative'],
    [0.000001, 'non-negative'],
    [1, 'non-negative'],
    [99.99999, 'non-negative'],
  ])('%f => %s', (value, expected) => {
    expect(range(value)).toEqual(expected);
  });

  test.each([100, 100.00001, 1000, 10000000])('%f => throws', (value) => {
    expect(() => range(value)).toThrow(/greater than maximum/);
  });
});
