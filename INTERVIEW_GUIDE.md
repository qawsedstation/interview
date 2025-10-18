# Eurostar Interview Practice Guide

## Overview
This repository is set up to help you practice for your Eurostar technical interview using Test-Driven Development (TDD).

## Two Practice Paths Available

### 🎯 Path 1: Algorithm Fundamentals (Start Here!)
- **ALGORITHM_REQUIREMENTS.md**: 10 progressive algorithm challenges
- Focus on core graph algorithms and data structures
- Simple examples (stations A, B, C, D...)
- Build foundation before tackling realistic scenarios
- **Recommended for beginners or algorithm practice**

### 🚄 Path 2: Eurostar Realistic Scenarios
- **REQUIREMENTS.md**: 5 progressive interview scenarios (Easy → Very Hard)
- Real-world Eurostar data with timezones, schedules, seat availability
- Combines multiple algorithm concepts
- **Recommended after completing Algorithm Fundamentals**

## What's Included

### 📋 Requirements (Two Sets)
- **ALGORITHM_REQUIREMENTS.md**: 10 algorithm fundamentals (⭐ to ⭐⭐⭐⭐⭐)
  - Build network, BFS, Dijkstra, DFS, constrained optimization
  - Located in `src/algorithms/`
- **REQUIREMENTS.md**: 5 Eurostar scenarios (⭐ to ⭐⭐⭐⭐⭐)
  - Route display, journey planning, fastest routes, seat availability
  - Located in `src/requirements/`

### 📊 Data Structure
- **src/data/eurostarRoutes.ts**: Complete Eurostar network data
  - 11 real Eurostar stations across UK, France, Belgium, Netherlands
  - Realistic train routes (adjacency structure)
  - Scheduled journeys with departure/arrival times
  - Seat availability data

### 🔧 TypeScript Types
- **src/types/index.ts**: All necessary type definitions
- Interfaces for stations, routes, journeys, results
- Use these types for type-safe implementation

### ✅ Test Files (Ready for TDD)
- `src/requirements/requirement1.test.ts`
- `src/requirements/requirement2.test.ts`
- `src/requirements/requirement3.test.ts`
- `src/requirements/requirement4.test.ts`
- `src/requirements/requirement5.test.ts`

### 📝 Implementation Files (Stubs)
- `src/requirements/requirement1.ts`
- `src/requirements/requirement2.ts`
- `src/requirements/requirement3.ts`
- `src/requirements/requirement4.ts`
- `src/requirements/requirement5.ts`

## How to Practice TDD

### The TDD Cycle (Red-Green-Refactor)

1. **🔴 RED - Write a Failing Test**
   ```bash
   # Write a test in requirement1.test.ts
   # Run the test - it should fail
   npm test requirement1
   ```

2. **🟢 GREEN - Make It Pass**
   ```bash
   # Write minimal code in requirement1.ts to pass the test
   # Run the test - it should pass
   npm test requirement1
   ```

3. **♻️ REFACTOR - Improve the Code**
   ```bash
   # Clean up the code while keeping tests green
   # Run the test - should still pass
   npm test requirement1
   ```

### Step-by-Step Practice Workflow

#### Starting with Requirement 1

1. **Read the requirement** in REQUIREMENTS.md
2. **Open the test file**: `src/requirements/requirement1.test.ts`
3. **Write your first test**:
   ```typescript
   it('should return formatted array of all direct routes', () => {
     const result = displayDirectRoutes([
       { from: 'GBQQS', to: 'FRPNO', distance: 492 }
     ]);

     expect(result).toEqual([
       'London St Pancras International → Paris Gare du Nord'
     ]);
   });
   ```

4. **Run the test** (it will fail):
   ```bash
   npm test requirement1
   ```

5. **Implement minimal code** in `requirement1.ts`:
   ```typescript
   export function displayDirectRoutes(routeData: Route[] = routes): string[] {
     return routeData.map(route => {
       const fromName = getStationName(route.from);
       const toName = getStationName(route.to);
       return `${fromName} → ${toName}`;
     });
   }
   ```

6. **Run the test again** (should pass):
   ```bash
   npm test requirement1
   ```

7. **Add more tests** for edge cases:
   - Empty dataset
   - Multiple routes
   - etc.

8. **Refactor** as needed while keeping tests green

## Available Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended)
npm test:watch

# Run specific requirement tests
npm test requirement1
npm test requirement2
# ... etc

# Run tests with coverage
npm test:coverage
```

## Interview Simulation Tips

### Before the Interview
- [ ] Practice each requirement at least once
- [ ] Get comfortable with the TDD cycle
- [ ] Review the data structure in `src/data/eurostarRoutes.ts`
- [ ] Familiarize yourself with the types in `src/types/index.ts`
- [ ] Practice explaining your thought process out loud

### During the Interview
- [ ] **Think out loud** - explain your reasoning
- [ ] **Write tests first** - they're looking for TDD!
- [ ] **Start simple** - don't over-engineer initially
- [ ] **Ask clarifying questions** if requirements are unclear
- [ ] **Test edge cases** - empty inputs, invalid data, etc.
- [ ] **Refactor confidently** - tests give you safety net
- [ ] **Use TypeScript features** - show type safety knowledge

### TDD Best Practices
1. **Test names should describe behavior**
   ```typescript
   // Good
   it('should return empty array when no routes exist')

   // Bad
   it('test1')
   ```

2. **Arrange-Act-Assert pattern**
   ```typescript
   it('should format route correctly', () => {
     // Arrange
     const input = [{ from: 'GBQQS', to: 'FRPNO', distance: 492 }];

     // Act
     const result = displayDirectRoutes(input);

     // Assert
     expect(result[0]).toContain(' → ');
   });
   ```

3. **One assertion per test (when possible)**

4. **Test behavior, not implementation**

## Recommended Practice Order

### Week 1: Algorithm Fundamentals (ALGORITHM_REQUIREMENTS.md)

**Day 1-2: Basic Graph Operations**
- ✅ **Algorithms 1-3**: Build network, find connections, check routes
  - Focus: Graph representation, basic queries
  - Time: 2-3 hours

**Day 3-4: Path Finding**
- ✅ **Algorithms 4-5**: BFS shortest path, count stops
  - Focus: Breadth-first search, route validation
  - Time: 3-4 hours

**Day 5-6: Weighted Graphs**
- ✅ **Algorithms 6-7**: Weighted networks, calculate duration
  - Focus: Weighted graphs, path calculation
  - Time: 3-4 hours

**Day 7-8: Advanced Algorithms**
- ✅ **Algorithm 8**: Dijkstra's fastest route
  - Focus: Priority queues, shortest path optimization
  - Time: 3-4 hours

**Day 9-10: Complex Problems**
- ✅ **Algorithms 9-10**: All routes DFS, constrained optimization
  - Focus: Backtracking, constraint satisfaction
  - Time: 4-6 hours

### Week 2: Eurostar Scenarios (REQUIREMENTS.md)

**Day 11-12: Foundations**
- ✅ **Requirement 1**: Basic route display
  - Focus: Real data handling, string formatting
  - Time: 30-45 minutes

**Day 13-14: Graph Traversal**
- ✅ **Requirement 2**: Find all routes between stations
  - Focus: Apply BFS/DFS to real network
  - Time: 1-2 hours

**Day 15-16: Time Calculations**
- ✅ **Requirement 3**: Journey duration with timezones
  - Focus: Time math, timezone handling, layovers
  - Time: 2-3 hours

**Day 17-18: Optimization**
- ✅ **Requirement 4**: Find fastest route with schedules
  - Focus: Real scheduling, Dijkstra with time constraints
  - Time: 2-3 hours

**Day 19-20: Complex Logic**
- ✅ **Requirement 5**: Multi-passenger seat availability
  - Focus: Multiple constraints, alternative solutions
  - Time: 2-3 hours

## Helpful Data Examples

### Station Codes
- `GBQQS` - London St Pancras International
- `FRPNO` - Paris Gare du Nord
- `BEMMB` - Brussels Midi/Zuid
- `NLAMS` - Amsterdam Centraal
- `FRLPD` - Lyon Part-Dieu
- `FRMSC` - Marseille St-Charles

### Sample Routes
- London → Paris: Direct, ~2h 17m
- London → Amsterdam: Direct or via Brussels
- Paris → Lyon: Direct, ~2h
- Lyon → Marseille: Direct, ~1h 42m

### Helper Functions Available
```typescript
// From src/data/eurostarRoutes.ts
getStationByCode(code: string): Station | undefined
getStationName(code: string): string
```

## Common Pitfalls to Avoid

1. ❌ **Writing implementation before tests**
   - ✅ Always write test first!

2. ❌ **Testing implementation details**
   - ✅ Test public interfaces and behavior

3. ❌ **Skipping edge cases**
   - ✅ Test: empty, null, invalid inputs

4. ❌ **Large, complex tests**
   - ✅ Keep tests focused and simple

5. ❌ **Ignoring TypeScript errors**
   - ✅ Fix type errors immediately

## Interview Day Checklist

### Setup (5 minutes before)
- [ ] VS Code with Live Share installed
- [ ] Project runs successfully (`npm test`)
- [ ] Internet connection stable
- [ ] Comfortable environment, water ready
- [ ] Read through the requirement they'll give you

### During Interview
- [ ] Breathe and stay calm
- [ ] Listen carefully to requirements
- [ ] Repeat requirements back to confirm understanding
- [ ] Start with test structure
- [ ] Write failing test
- [ ] Implement minimal solution
- [ ] Run tests frequently
- [ ] Explain reasoning throughout

## Questions to Ask Interviewer

- "Should I prioritize performance or readability for this first iteration?"
- "Are there any specific edge cases you'd like me to consider?"
- "Would you like me to handle [specific scenario]?"
- "Should I validate inputs or assume they're always valid?"

## Good Luck!

Remember:
- **TDD is key** - they're specifically looking for this
- **Communication matters** - think out loud
- **Don't rush** - careful, tested code beats fast, broken code
- **Have fun** - show your passion for problem-solving!

---

Need help? Check the data structure in `/src/data/eurostarRoutes.ts` or types in `/src/types/index.ts`
