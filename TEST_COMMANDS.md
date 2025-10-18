# Test Commands Reference

Quick reference for all available test scripts in this project.

---

## 🚀 Quick Start

```bash
# Run ALL tests (algorithms + requirements)
npm test

# Watch mode - auto-rerun on file changes
npm run test:watch

# With coverage report
npm run test:coverage
```

---

## 🎯 Algorithm Tests

### Run All Algorithms

```bash
# Run all 10 algorithm tests
npm run algorithms

# or short version
npm run algo

# Watch mode - auto-rerun on changes
npm run algorithms:watch
```

### Run Individual Algorithms

```bash
npm run algorithm1   # Build the Network
npm run algorithm2   # Find Direct Connections
npm run algorithm3   # Check if Route Exists
npm run algorithm4   # Find Shortest Path (BFS)
npm run algorithm5   # Calculate Total Stops
npm run algorithm6   # Weighted Network
npm run algorithm7   # Calculate Route Duration
npm run algorithm8   # Find Fastest Route (Dijkstra)
npm run algorithm9   # Find All Routes (DFS)
npm run algorithm10  # Optimal Route with Constraints
```

---

## 🚄 Eurostar Requirement Tests

### Run All Requirements

```bash
# Run all 5 Eurostar requirements
npm run requirements

# or short version
npm run req

# Watch mode - auto-rerun on changes
npm run requirements:watch
```

### Run Individual Requirements

```bash
npm run requirement1  # Basic Route Display
npm run requirement2  # Find All Routes Between Stations
npm run requirement3  # Calculate Journey Duration
npm run requirement4  # Find Fastest Route
npm run requirement5  # Multi-Passenger Seat Availability
```

---

## 📋 Example Workflow

### Starting a New Challenge

```bash
# Example: Working on Algorithm 4
npm run algorithm4

# If tests fail (as expected with TDD):
# 1. Write test in src/algorithms/algorithm4.test.ts
# 2. Run: npm run algorithm4
# 3. Test fails (RED)
# 4. Implement in src/algorithms/algorithm4.ts
# 5. Run: npm run algorithm4
# 6. Test passes (GREEN)
# 7. Refactor if needed, keeping tests green
```

### Using Watch Mode

```bash
# Watch mode for active development
npm run algorithms:watch

# Now as you save files, tests auto-rerun
# Great for TDD workflow!
```

### Checking All Work

```bash
# Before committing, run everything
npm test

# Check code coverage
npm run test:coverage
```

---

## 🎨 Advanced Usage

### Pattern Matching

```bash
# Run all algorithm tests (using Jest pattern)
npm test -- algorithm

# Run all requirement tests
npm test -- requirement

# Run specific numbered tests
npm test -- algorithm[1-5]
```

### Verbose Output

```bash
# See detailed test output
npm run algorithm1 -- --verbose

# Show test suite hierarchy
npm test -- --verbose
```

### Debugging

```bash
# Run single test file without watch
npm run algorithm1

# Run with Node debugger
node --inspect-brk node_modules/.bin/jest algorithm1
```

---

## 📊 Quick Reference Table

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm test` | Run all tests | Final check before commit |
| `npm run algorithms` | Run all algorithm tests | Check algorithm progress |
| `npm run requirements` | Run all requirement tests | Check Eurostar progress |
| `npm run algorithm1` | Run specific algorithm | Focus on one challenge |
| `npm run algorithms:watch` | Auto-rerun algorithm tests | Active development |
| `npm run test:coverage` | Coverage report | See what's not tested |

---

## 💡 Tips

1. **Use watch mode** during active development
   ```bash
   npm run algorithms:watch
   ```

2. **Run specific test** when working on one challenge
   ```bash
   npm run algorithm4
   ```

3. **Check everything** before moving to next challenge
   ```bash
   npm run algorithms  # Make sure all pass
   ```

4. **Verify final work** before interview
   ```bash
   npm test            # All tests
   npm run test:coverage  # Coverage check
   ```

---

## 🔥 Common Commands

```bash
# Most used during practice:
npm run algorithms:watch     # Algorithm practice
npm run requirements:watch   # Eurostar practice
npm run algorithm4          # Specific challenge
npm test                    # Final verification
```

---

**Happy Testing! 🧪**
