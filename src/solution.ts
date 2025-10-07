
export class Solution {
  /**
   * Returns a greeting message
   */
  greet(name: string): string {
    return `Hello, ${name}!`;
  }

  /**
   * Adds two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Finds the maximum number in an array
   */
  findMax(numbers: number[]): number | undefined {
    if (numbers.length === 0) return undefined;
    return Math.max(...numbers);
  }
}
