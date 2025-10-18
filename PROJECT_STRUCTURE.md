# Project Structure

## Directory Layout

```
interview/
├── ALGORITHM_REQUIREMENTS.md # 10 algorithm challenges (⭐ to ⭐⭐⭐⭐⭐)
├── REQUIREMENTS.md           # 5 Eurostar scenarios (⭐ to ⭐⭐⭐⭐⭐)
├── INTERVIEW_GUIDE.md        # Complete practice guide
├── PROJECT_STRUCTURE.md      # This file
├── README.md                 # Original project readme
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest test configuration
└── src/
    ├── types/
    │   └── index.ts          # TypeScript type definitions (Eurostar)
    ├── data/
    │   ├── eurostarRoutes.ts # Complete Eurostar dataset
    │   └── simpleNetwork.ts  # Simple test data for algorithms
    ├── algorithms/           # Algorithm fundamentals (Path 1)
    │   ├── types.ts          # Algorithm-specific types
    │   ├── algorithm1.ts         # Build network
    │   ├── algorithm1.test.ts
    │   ├── algorithm2.ts         # Find direct connections
    │   ├── algorithm2.test.ts
    │   ├── algorithm3.ts         # Check if route exists
    │   ├── algorithm3.test.ts
    │   ├── algorithm4.ts         # Find shortest path (BFS)
    │   ├── algorithm4.test.ts
    │   ├── algorithm5.ts         # Calculate total stops
    │   ├── algorithm5.test.ts
    │   ├── algorithm6.ts         # Weighted network
    │   ├── algorithm6.test.ts
    │   ├── algorithm7.ts         # Calculate route duration
    │   ├── algorithm7.test.ts
    │   ├── algorithm8.ts         # Find fastest route (Dijkstra)
    │   ├── algorithm8.test.ts
    │   ├── algorithm9.ts         # Find all routes with max stops
    │   ├── algorithm9.test.ts
    │   ├── algorithm10.ts        # Optimal route with constraints
    │   └── algorithm10.test.ts
    └── requirements/         # Eurostar scenarios (Path 2)
        ├── requirement1.ts        # Basic route display
        ├── requirement1.test.ts
        ├── requirement2.ts        # Find all routes
        ├── requirement2.test.ts
        ├── requirement3.ts        # Journey duration
        ├── requirement3.test.ts
        ├── requirement4.ts        # Find fastest route
        ├── requirement4.test.ts
        ├── requirement5.ts        # Multi-passenger availability
        └── requirement5.test.ts
```

## Key Files Explained

### 📋 Documentation Files

**ALGORITHM_REQUIREMENTS.md**
- 10 progressive algorithm challenges
- Focus on fundamental graph algorithms
- Starts easy (⭐), ends very hard (⭐⭐⭐⭐⭐)
- Build foundation before tackling realistic scenarios
- Implementations in `src/algorithms/`

**REQUIREMENTS.md**
- 5 progressive Eurostar interview scenarios
- Real-world data with timezones, schedules, seat availability
- Starts easy (⭐), ends very hard (⭐⭐⭐⭐⭐)
- Mirrors actual Eurostar interview structure
- Implementations in `src/requirements/`

**INTERVIEW_GUIDE.md**
- Complete TDD workflow guide
- Two-week practice schedule
- Interview day checklist
- Best practices and common pitfalls

**PROJECT_STRUCTURE.md** (this file)
- Overview of file organization
- Quick reference for navigation

### 🔧 Source Files

**src/algorithms/types.ts**
- Types for algorithm challenges
- Network, WeightedNetwork, RouteResult, etc.
- Simpler types for learning fundamentals

**src/types/index.ts**
- Types for Eurostar scenarios
- Station, Route, Journey definitions
- Query and Result types for realistic scenarios

**src/data/simpleNetwork.ts**
- Simple test networks (A, B, C, D...)
- Both unweighted and weighted examples
- Helper functions for quick network setup
- Used for algorithm practice

**src/data/eurostarRoutes.ts**
- 11 Eurostar stations (UK, France, Belgium, Netherlands)
- 24+ route connections (adjacency structure)
- 30+ scheduled journeys with times and seat availability
- Helper functions: `getStationByCode()`, `getStationName()`

**src/algorithms/algorithmX.ts**
- Algorithm implementation files (currently stubs)
- Focus on fundamental graph algorithms
- Each throws "Not implemented yet" error
- Start here for foundational practice

**src/algorithms/algorithmX.test.ts**
- Algorithm test files with TODO placeholders
- Simple test data (A, B, C stations)
- Build your algorithm skills here first

**src/requirements/requirementX.ts**
- Eurostar scenario implementations (currently stubs)
- Apply algorithms to realistic data
- More complex than algorithm files
- Tackle after completing algorithms

**src/requirements/requirementX.test.ts**
- Eurostar scenario test files
- Real-world test cases
- Combine multiple algorithm concepts
- Follow TDD: write tests BEFORE implementation

## Data Structure Overview

### Stations
```typescript
{
  code: 'GBQQS',
  name: 'London St Pancras International',
  city: 'London',
  country: 'United Kingdom',
  timezone: TimeZone.GMT
}
```

### Routes (Adjacency List)
```typescript
{
  from: 'GBQQS',    // London
  to: 'FRPNO',      // Paris
  distance: 492     // km
}
```

### Journeys (Scheduled Trains)
```typescript
{
  trainNumber: 'ES9004',
  from: 'GBQQS',
  to: 'FRPNO',
  departure: '07:01',
  arrival: '10:17',
  availableSeats: 15,
  days: [Monday, Tuesday, Wednesday, Thursday, Friday]
}
```

## Requirements Quick Reference

### Algorithm Fundamentals (ALGORITHM_REQUIREMENTS.md)

| # | Name | Difficulty | Key Focus |
|---|------|------------|-----------|
| 1 | Build Network | ⭐ Easy | Adjacency list, graph representation |
| 2 | Direct Connections | ⭐ Easy | Graph queries, data access |
| 3 | Check Route Exists | ⭐ Easy | Edge detection |
| 4 | Shortest Path (BFS) | ⭐⭐ Medium | Breadth-first search |
| 5 | Count Stops | ⭐⭐ Medium | Route validation |
| 6 | Weighted Network | ⭐⭐⭐ Medium-Hard | Weighted graphs |
| 7 | Route Duration | ⭐⭐⭐ Medium-Hard | Weighted path calculation |
| 8 | Fastest Route (Dijkstra) | ⭐⭐⭐⭐ Hard | Dijkstra's algorithm |
| 9 | All Routes (DFS) | ⭐⭐⭐⭐ Hard | DFS, backtracking |
| 10 | Constrained Optimization | ⭐⭐⭐⭐⭐ Very Hard | Multiple constraints |

### Eurostar Scenarios (REQUIREMENTS.md)

| # | Name | Difficulty | Key Focus |
|---|------|------------|-----------|
| 1 | Basic Route Display | ⭐ Easy | Iteration, formatting |
| 2 | Find All Routes | ⭐⭐ Medium | Graph traversal, recursion |
| 3 | Calculate Duration | ⭐⭐⭐ Medium-Hard | Time math, timezones |
| 4 | Find Fastest Route | ⭐⭐⭐⭐ Hard | Optimization, scheduling |
| 5 | Seat Availability | ⭐⭐⭐⭐⭐ Very Hard | Constraints, alternatives |

## NPM Scripts

```bash
npm test              # Run all tests
npm test:watch        # Run tests in watch mode
npm test:coverage     # Run with coverage report
npm test requirement1 # Run specific requirement
```

## Quick Start

### Path 1: Algorithm Fundamentals (Recommended for Beginners)

1. Read `ALGORITHM_REQUIREMENTS.md` - understand Algorithm 1
2. Open `src/algorithms/algorithm1.test.ts`
3. Write your first test (replace TODO with actual test logic)
4. Run `npm test algorithm1` - watch it fail (RED)
5. Implement in `src/algorithms/algorithm1.ts`
6. Run `npm test algorithm1` - watch it pass (GREEN)
7. Refactor if needed - keep tests green
8. Repeat for Algorithms 2-10
9. Move to Path 2 when ready

### Path 2: Eurostar Scenarios (After Completing Algorithms)

1. Read `REQUIREMENTS.md` - understand Requirement 1
2. Open `src/requirements/requirement1.test.ts`
3. Write your first test (replace TODO with actual test logic)
4. Run `npm test requirement1` - watch it fail (RED)
5. Implement in `src/requirements/requirement1.ts`
6. Run `npm test requirement1` - watch it pass (GREEN)
7. Refactor if needed - keep tests green
8. Repeat for Requirements 2-5

## Station Codes Cheat Sheet

| Code | Station Name | City | Country |
|------|-------------|------|---------|
| GBQQS | London St Pancras International | London | UK |
| FRPNO | Paris Gare du Nord | Paris | France |
| FRMLV | Marne-la-Vallée Chessy | Marne-la-Vallée | France |
| FRLPD | Lyon Part-Dieu | Lyon | France |
| FRMSC | Marseille St-Charles | Marseille | France |
| FRAVI | Avignon TGV | Avignon | France |
| BEMMB | Brussels Midi/Zuid | Brussels | Belgium |
| NLAMS | Amsterdam Centraal | Amsterdam | Netherlands |
| NLRTD | Rotterdam Centraal | Rotterdam | Netherlands |
| GBASH | Ashford International | Ashford | UK |
| BEBMK | Antwerp Central | Antwerp | Belgium |

## Common Import Patterns

```typescript
// Types
import { Station, Route, Journey, CompleteRoute } from '../types';

// Data and helpers
import { stations, routes, journeys, getStationName } from '../data/eurostarRoutes';

// For testing
import { yourFunction } from './requirement1';
```

## Tips

- Start with Requirement 1 - it's the easiest
- Each requirement builds on previous concepts
- Use `getStationName()` helper to convert codes to names
- All times are in local timezone for that station
- Focus on TDD - tests first, always!
- Run tests frequently during development

Good luck with your interview preparation! 🚄
