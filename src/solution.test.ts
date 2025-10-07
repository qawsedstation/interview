// Jest tests for TypeScript solution
import { greet, add, findMax } from './solution';

describe('TypeScript Solution Tests', () => {
  describe('greet', () => {
    test('should return greeting message', () => {
      expect(greet('World')).toBe('Hello, World!');
    });

    test('should greet different names', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
      expect(greet('Bob')).toBe('Hello, Bob!');
    });
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-1, -1)).toBe(-2);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('findMax', () => {
    test('should find maximum in array', () => {
      expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });

    test('should handle single element', () => {
      expect(findMax([42])).toBe(42);
    });

    test('should handle empty array', () => {
      expect(findMax([])).toBeUndefined();
    });

    test('should handle negative numbers', () => {
      expect(findMax([-5, -1, -10])).toBe(-1);
    });
  });
});
