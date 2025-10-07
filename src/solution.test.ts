// Jest tests for TypeScript solution
import { Solution } from './solution';

describe('TypeScript Solution Tests', () => {
  let solution: Solution;

  beforeEach(() => {
    solution = new Solution();
  });

  describe('greet', () => {
    test('should return greeting message', () => {
      expect(solution.greet('World')).toBe('Hello, World!');
    });

    test('should greet different names', () => {
      expect(solution.greet('Alice')).toBe('Hello, Alice!');
      expect(solution.greet('Bob')).toBe('Hello, Bob!');
    });
  });

 
});
