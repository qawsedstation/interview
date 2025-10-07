// Jest tests for JavaScript solution
const { greet, add } = require('./solution.js');

describe('JavaScript Solution Tests', () => {
  describe('greet', () => {
    test('should return greeting message', () => {
      expect(greet('World')).toBe('Hello, World!');
    });

    test('should greet different names', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
      expect(greet('Bob')).toBe('Hello, Bob!');
    });
  });

});
