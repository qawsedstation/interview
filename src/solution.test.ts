// Jest tests for TypeScript solution
import { Book } from './solution';

describe('Book', () => {
  let solution: Book;

  beforeEach(() => {
    solution = new Book();
  });

  describe('find', () => {


    it('should return the index of a specific letter', () => {
      expect(solution.find('C')).toBe(2);
    });

    it('should return the index of a specific letter', () => {
      expect(solution.find('A')).toBe(0);
    });

    it('should return the index of a specific letter', () => {
      expect(solution.find('G')).toBe(5);
    });
    

  });


 
});
