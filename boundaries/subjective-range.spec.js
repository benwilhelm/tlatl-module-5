import { subjectiveRange } from './subjective-range.js';

test('defines range by array of boundaries', () => {
  const range = subjectiveRange([
    { boundary: -Infinity, label: 'negative' },
    { boundary: 0, label: 'non-negative' },
  ]);

  expect(range(-100000000000)).toEqual('negative');
  expect(range(-1)).toEqual('negative');
  expect(range(-0.000000000001)).toEqual('negative');
  expect(range(0)).toEqual('non-negative');
  expect(range(0.000000001)).toEqual('non-negative');
  expect(range(1)).toEqual('non-negative');
  expect(range(100000000)).toEqual('non-negative');
});
