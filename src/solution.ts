// TypeScript solution file
// Use this file for TypeScript interview questions

/**
 * Example function: Returns a greeting message
 */
export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

/**
 * Example function: Adds two numbers
 */
export const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * Example function: Finds the maximum number in an array
 */
export const findMax = (numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
};
