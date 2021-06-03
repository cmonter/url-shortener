const add = require('./add');

test('Add 2 + 1 to equal 3', () => {
  expect(add(2, 1)).toBe(3);
});