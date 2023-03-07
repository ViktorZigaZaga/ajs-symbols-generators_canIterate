import canIterate from '../app';

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
])('can iterate', (obj, expected) => {
  expect(canIterate(obj)).toBe(expected);
});
