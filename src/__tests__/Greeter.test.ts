import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Harry')).toBe('Hello Harry');
});