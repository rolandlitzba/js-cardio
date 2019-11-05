const reverseString = require('./reverse-string');

test('hello should be olleh', () => {
  expect(reverseString('hello')).toEqual('olleh');
});
