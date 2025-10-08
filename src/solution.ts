
export class Book {

  private static readonly BOOK: string[] = ['A', 'B', 'C', 'E', 'F', 'G'];

  find(letter: string): number {

    let left = 0;
    let right = Book.BOOK.length - 1;

    while (left <= right) {

      let mid = Math.floor((left + right) / 2);

      if (Book.BOOK[mid] === letter) {
        return mid
      }

      if (Book.BOOK[mid] < letter) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }

    }

    // let i = 0;
    // for (let bookLetter of Book.BOOK) {
    //   if (letter === bookLetter) {
    //     return i;
    //   }
    //   i++;
    // }
    // return 0;
  }



}
