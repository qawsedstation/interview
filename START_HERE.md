# 🚀 Start Here - Eurostar Interview Practice

Welcome to your comprehensive interview practice setup! This repository contains everything you need to prepare for your Eurostar technical interview using Test-Driven Development (TDD).

## 📚 What You Have

### Two Complete Practice Paths:

1. **🎯 Algorithm Fundamentals** (Week 1)
   - 10 progressive algorithm challenges
   - Simple examples (stations A, B, C, D)
   - Build core graph algorithm skills
   - **Start here if you want to build strong fundamentals**

2. **🚄 Eurostar Realistic Scenarios** (Week 2)
   - 5 realistic interview scenarios
   - Real Eurostar data with timezones, schedules, seats
   - Apply algorithms to complex problems
   - **Do this after completing Algorithm Fundamentals**

## 🎯 Recommended Approach

### For Beginners or Those Wanting Strong Foundations:
```
Week 1: ALGORITHM_REQUIREMENTS.md (10 challenges)
   ↓
Week 2: REQUIREMENTS.md (5 scenarios)
   ↓
Interview Ready! 🎉
```

### For Experienced Developers:
```
Skip directly to: REQUIREMENTS.md (5 scenarios)
```

## 🚀 Quick Start (5 minutes)

### Step 1: Choose Your Starting Point

**Option A: Algorithm Fundamentals** (Recommended)
```bash
# Read the requirements
cat ALGORITHM_REQUIREMENTS.md

# Open your first test
code src/algorithms/algorithm1.test.ts

# Run the test
npm test algorithm1
```

**Option B: Eurostar Scenarios** (If experienced)
```bash
# Read the requirements
cat REQUIREMENTS.md

# Open your first test
code src/requirements/requirement1.test.ts

# Run the test
npm test requirement1
```

### Step 2: Follow TDD Cycle

1. **🔴 RED** - Write a failing test
2. **🟢 GREEN** - Write code to make it pass
3. **♻️ REFACTOR** - Improve the code
4. Repeat!

### Step 3: Practice Regularly

- Use `npm test:watch` for continuous testing
- Complete 1-2 challenges per day
- Review previous work before moving forward

## 📖 Documentation Guide

| File | Purpose | When to Read |
|------|---------|-------------|
| **START_HERE.md** | This file - overview and quick start | First! |
| **ALGORITHM_REQUIREMENTS.md** | 10 algorithm challenges | Week 1 practice |
| **REQUIREMENTS.md** | 5 Eurostar scenarios | Week 2 practice |
| **INTERVIEW_GUIDE.md** | Complete TDD guide, tips, checklist | Before starting |
| **PROJECT_STRUCTURE.md** | File organization reference | When navigating |

## 🎓 What You'll Learn

### Week 1: Algorithm Fundamentals
- ✅ Graph representation (adjacency lists)
- ✅ Breadth-First Search (BFS)
- ✅ Depth-First Search (DFS)
- ✅ Dijkstra's Algorithm
- ✅ Weighted graphs
- ✅ Backtracking
- ✅ Constrained optimization

### Week 2: Eurostar Scenarios
- ✅ Real-world data handling
- ✅ Timezone calculations
- ✅ Schedule management
- ✅ Route optimization
- ✅ Constraint satisfaction
- ✅ Seat availability logic

## 🛠️ Available Commands

```bash
# Run all tests
npm test

# Watch mode (auto-rerun on changes)
npm test:watch

# Run specific algorithm
npm test algorithm1

# Run specific requirement
npm test requirement1

# Coverage report
npm test:coverage
```

## 📊 Progress Tracking

### Algorithm Fundamentals (src/algorithms/)
- [ ] Algorithm 1: Build Network (⭐)
- [ ] Algorithm 2: Direct Connections (⭐)
- [ ] Algorithm 3: Check Route Exists (⭐)
- [ ] Algorithm 4: Shortest Path BFS (⭐⭐)
- [ ] Algorithm 5: Count Stops (⭐⭐)
- [ ] Algorithm 6: Weighted Network (⭐⭐⭐)
- [ ] Algorithm 7: Route Duration (⭐⭐⭐)
- [ ] Algorithm 8: Dijkstra Fastest Route (⭐⭐⭐⭐)
- [ ] Algorithm 9: All Routes DFS (⭐⭐⭐⭐)
- [ ] Algorithm 10: Constrained Optimization (⭐⭐⭐⭐⭐)

### Eurostar Scenarios (src/requirements/)
- [ ] Requirement 1: Basic Route Display (⭐)
- [ ] Requirement 2: Find All Routes (⭐⭐)
- [ ] Requirement 3: Journey Duration (⭐⭐⭐)
- [ ] Requirement 4: Find Fastest Route (⭐⭐⭐⭐)
- [ ] Requirement 5: Seat Availability (⭐⭐⭐⭐⭐)

## 🎯 Interview Day Preparation

### 1 Week Before
- [ ] Complete all Algorithm Fundamentals
- [ ] Complete at least 3 Eurostar Scenarios
- [ ] Review common patterns

### 3 Days Before
- [ ] Complete all Eurostar Scenarios
- [ ] Practice explaining solutions out loud
- [ ] Review TDD best practices

### 1 Day Before
- [ ] Redo Algorithm 1 and Requirement 1 from scratch
- [ ] Test your VS Code setup
- [ ] Get good rest!

### Interview Day
- [ ] Arrive 5 minutes early
- [ ] Have water ready
- [ ] Breathe and stay calm
- [ ] Think out loud
- [ ] Write tests FIRST!

## 💡 Key Success Factors

1. **Test-Driven Development** - They're specifically looking for this!
2. **Communication** - Think out loud, explain your reasoning
3. **Edge Cases** - Always test: empty inputs, invalid data, boundaries
4. **TypeScript** - Use types effectively to show knowledge
5. **Clean Code** - Readable, well-named variables and functions

## ❓ Common Questions

**Q: Should I do all algorithms before Eurostar scenarios?**
A: Recommended for strong foundations, but not required. If you're confident with graph algorithms, you can start with Eurostar scenarios.

**Q: How long should each challenge take?**
A: Algorithms 1-3: 30-60 min each. Algorithms 4-7: 1-2 hours. Algorithms 8-10: 2-4 hours. Eurostar scenarios: Similar progression.

**Q: What if I get stuck?**
A: Review the test cases in the requirements document. Check the data structures in `src/data/`. Look up the algorithm concept online.

**Q: Can I look at solutions online?**
A: Yes for learning, but try to solve it yourself first! The interview will be live coding.

**Q: Should I optimize for performance?**
A: Start with correct, readable code. Optimize only if time permits or interviewer asks.

## 🎁 Bonus Resources

- **Simple Network Data**: `src/data/simpleNetwork.ts`
- **Eurostar Data**: `src/data/eurostarRoutes.ts`
- **Type Definitions**: `src/types/index.ts` and `src/algorithms/types.ts`
- **Helper Functions**: `getStationName()`, `getStationByCode()`

## 🚂 Let's Get Started!

1. Open **ALGORITHM_REQUIREMENTS.md** (or **REQUIREMENTS.md** if experienced)
2. Read Algorithm 1 / Requirement 1
3. Open the test file
4. Start coding!

**Remember**: This is about learning and practicing. Don't rush. Focus on understanding each concept deeply.

---

## 📞 Need Help?

- Check **INTERVIEW_GUIDE.md** for detailed TDD workflow
- Check **PROJECT_STRUCTURE.md** for file organization
- Review the requirements documents for examples
- Practice explaining your thought process out loud

**Good luck! You've got this! 🚀**
