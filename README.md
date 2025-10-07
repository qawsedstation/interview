# Interview Practice Boilerplate

A flexible setup for practicing coding interview questions in both JavaScript and TypeScript.

## Quick Start

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Run only JavaScript tests
```bash
npm run test:js
```

### Run only TypeScript tests
```bash
npm run test:ts
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Files

- **`src/solution.js`** - Write your JavaScript (ES6) solutions here
- **`src/solution.test.js`** - Write JavaScript tests here
- **`src/solution.ts`** - Write your TypeScript solutions here
- **`src/solution.test.ts`** - Write TypeScript tests here

## TypeScript Configuration

TypeScript is configured with **flexible/lenient settings** (`strict: false`) so it won't crash on type errors. This allows you to focus on solving problems quickly during interviews without getting blocked by type issues.

## Tips

1. Choose either `.js` or `.ts` file based on the interview requirements
2. Delete the sample functions and write your solution
3. Write tests as you go or use the existing test structure
4. Run `npm run test:watch` to get instant feedback as you code

Happy coding!
