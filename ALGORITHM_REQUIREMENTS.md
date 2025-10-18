# Train Network Algorithm Requirements

## Overview
These 10 requirements focus on fundamental graph algorithms and data structures. They're designed to build your skills progressively before tackling the more complex Eurostar requirements.

**Recommendation**: Complete these algorithm requirements BEFORE moving to the Eurostar requirements.

---

## Requirement 1: Build the Network ⭐
**Focus**: Graph representation, adjacency list

### Description
Create a function `buildNetwork(connections)` that takes an array of bidirectional connections and returns an adjacency list representation.

### Function Signature
```typescript
function buildNetwork(connections: string[][]): Record<string, string[]>
```

### Acceptance Criteria
- [ ] Convert array of connections to adjacency list
- [ ] Connections are bidirectional (A→B means B→A too)
- [ ] Each station appears in the output object
- [ ] No duplicate connections in adjacency lists

### Example
```typescript
Input: [['A', 'B'], ['B', 'C']]
Output: {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B']
}
```

### Test Cases
- Empty connections array
- Single connection
- Multiple connections from same station
- Triangle network (A-B-C-A)

---

## Requirement 2: Find Direct Connections ⭐
**Focus**: Graph queries, data access

### Description
Create a function `getDirectConnections(network, station)` that returns all stations directly connected to a given station.

### Function Signature
```typescript
function getDirectConnections(network: Network, station: string): string[]
```

### Acceptance Criteria
- [ ] Return all directly connected stations
- [ ] Return empty array if station doesn't exist
- [ ] Return empty array if station has no connections
- [ ] Results should be in consistent order

### Example
```typescript
const network = { 'A': ['B', 'C'], 'B': ['A'], 'C': ['A'] };

getDirectConnections(network, 'A') // ['B', 'C']
getDirectConnections(network, 'B') // ['A']
getDirectConnections(network, 'Z') // []
```

### Test Cases
- Station with multiple connections
- Station with single connection
- Station with no connections
- Non-existent station

---

## Requirement 3: Check if Route Exists ⭐
**Focus**: Graph edge detection

### Description
Create a function `hasDirectRoute(network, start, end)` that checks if two stations are directly connected.

### Function Signature
```typescript
function hasDirectRoute(network: Network, start: string, end: string): boolean
```

### Acceptance Criteria
- [ ] Return true if direct connection exists
- [ ] Return false if no direct connection
- [ ] Return false if either station doesn't exist
- [ ] Handle bidirectional connections properly

### Example
```typescript
const network = { 'A': ['B'], 'B': ['A', 'C'], 'C': ['B'] };

hasDirectRoute(network, 'A', 'B') // true
hasDirectRoute(network, 'B', 'A') // true (bidirectional)
hasDirectRoute(network, 'A', 'C') // false (not direct)
hasDirectRoute(network, 'A', 'Z') // false (Z doesn't exist)
```

### Test Cases
- Direct connection exists
- Connection exists in reverse
- No direct connection
- One or both stations don't exist

---

## Requirement 4: Find Shortest Path (BFS) ⭐⭐
**Focus**: Breadth-First Search algorithm

### Description
Create a function `findShortestPath(network, start, end)` that returns the shortest path between two stations by number of stops.

### Function Signature
```typescript
function findShortestPath(network: Network, start: string, end: string): string[] | null
```

### Acceptance Criteria
- [ ] Use BFS to find shortest path by stops
- [ ] Return path as array of station names
- [ ] Return null if no path exists
- [ ] Return [start] if start === end
- [ ] Path should be the fewest stations, not necessarily fewest distance

### Example
```typescript
const network = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C']
};

findShortestPath(network, 'A', 'D') // ['A', 'B', 'D'] or ['A', 'C', 'D']
findShortestPath(network, 'A', 'A') // ['A']
findShortestPath(network, 'A', 'Z') // null
```

### Test Cases
- Direct connection (1 hop)
- 2 hops required
- Multiple paths of same length
- No path exists
- Start equals end
- Invalid stations

---

## Requirement 5: Calculate Total Stops ⭐⭐
**Focus**: Route validation

### Description
Create a function `countStops(network, route)` that calculates the number of stops for a given route.

### Function Signature
```typescript
function countStops(network: Network, route: string[]): number
```

### Acceptance Criteria
- [ ] Count number of stops (transitions) in route
- [ ] Return -1 if any connection in route doesn't exist
- [ ] Return 0 for single-station route
- [ ] Validate each connection exists in network

### Example
```typescript
const network = { 'A': ['B'], 'B': ['A', 'C'], 'C': ['B'] };

countStops(network, ['A', 'B', 'C']) // 2 (A→B, B→C)
countStops(network, ['A']) // 0
countStops(network, ['A', 'C']) // -1 (no direct A→C)
countStops(network, []) // 0
```

### Test Cases
- Valid route with multiple stops
- Single station route
- Invalid route (connection missing)
- Empty route
- Route with non-existent station

---

## Requirement 6: Weighted Network with Travel Times ⭐⭐⭐
**Focus**: Weighted graph representation

### Description
Extend network building to support weighted connections with travel times.

### Function Signature
```typescript
interface WeightedConnection {
  station: string;
  time: number;
}

type WeightedNetwork = Record<string, WeightedConnection[]>;

function buildWeightedNetwork(connections: [string, string, number][]): WeightedNetwork
```

### Acceptance Criteria
- [ ] Each connection includes station name and travel time
- [ ] Connections are bidirectional with same weight
- [ ] Return weighted adjacency list
- [ ] Handle zero or negative times appropriately

### Example
```typescript
Input: [['A', 'B', 15], ['B', 'C', 20]]

Output: {
  'A': [{ station: 'B', time: 15 }],
  'B': [{ station: 'A', time: 15 }, { station: 'C', time: 20 }],
  'C': [{ station: 'B', time: 20 }]
}
```

### Test Cases
- Multiple weighted connections
- Same stations, different routes with different times
- Zero time connection
- Single connection

---

## Requirement 7: Calculate Route Duration ⭐⭐⭐
**Focus**: Weighted path calculation

### Description
Create a function `calculateDuration(weightedNetwork, route)` that calculates total travel time for a route.

### Function Signature
```typescript
function calculateDuration(weightedNetwork: WeightedNetwork, route: string[]): number
```

### Acceptance Criteria
- [ ] Sum all travel times along the route
- [ ] Return -1 if any connection doesn't exist
- [ ] Return 0 for empty or single-station route
- [ ] Validate each connection in sequence

### Example
```typescript
const network = {
  'A': [{ station: 'B', time: 15 }],
  'B': [{ station: 'A', time: 15 }, { station: 'C', time: 20 }],
  'C': [{ station: 'B', time: 20 }]
};

calculateDuration(network, ['A', 'B', 'C']) // 35 (15 + 20)
calculateDuration(network, ['A']) // 0
calculateDuration(network, ['A', 'C']) // -1 (no direct connection)
```

### Test Cases
- Valid route with multiple segments
- Single station
- Invalid connection in route
- Empty route

---

## Requirement 8: Find Fastest Route (Dijkstra) ⭐⭐⭐⭐
**Focus**: Dijkstra's algorithm for shortest path

### Description
Create a function `findFastestRoute(weightedNetwork, start, end)` that returns the route with minimum travel time.

### Function Signature
```typescript
interface RouteResult {
  route: string[];
  duration: number;
}

function findFastestRoute(
  weightedNetwork: WeightedNetwork,
  start: string,
  end: string
): RouteResult | null
```

### Acceptance Criteria
- [ ] Use Dijkstra's algorithm to find shortest path by time
- [ ] Return both route and total duration
- [ ] Return null if no path exists
- [ ] May have more stops than shortest path by hops if faster

### Example
```typescript
const network = {
  'A': [{ station: 'B', time: 50 }, { station: 'C', time: 20 }],
  'B': [{ station: 'A', time: 50 }, { station: 'D', time: 10 }],
  'C': [{ station: 'A', time: 20 }, { station: 'D', time: 25 }],
  'D': [{ station: 'B', time: 10 }, { station: 'C', time: 25 }]
};

findFastestRoute(network, 'A', 'D')
// { route: ['A', 'C', 'D'], duration: 45 }
// Even though A→B→D has fewer stops, A→C→D is faster
```

### Test Cases
- Fastest route has more stops
- Multiple paths, one clearly faster
- No path exists
- Start equals end
- Single hop is fastest

---

## Requirement 9: Find All Routes with Max Stops ⭐⭐⭐⭐
**Focus**: Depth-First Search, backtracking

### Description
Create a function `findAllRoutes(network, start, end, maxStops)` that finds all possible routes between two stations with a maximum number of stops.

### Function Signature
```typescript
function findAllRoutes(
  network: Network,
  start: string,
  end: string,
  maxStops: number
): string[][]
```

### Acceptance Criteria
- [ ] Find all valid paths from start to end
- [ ] Limit to maxStops or fewer
- [ ] Do not revisit stations (no cycles)
- [ ] Return empty array if no routes exist
- [ ] Order doesn't matter for returned routes

### Example
```typescript
const network = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C']
};

findAllRoutes(network, 'A', 'D', 3)
// [
//   ['A', 'B', 'D'],
//   ['A', 'C', 'D']
// ]

findAllRoutes(network, 'A', 'D', 1)
// [] (no path in 1 stop)
```

### Test Cases
- Multiple routes exist
- maxStops limits results
- No routes within maxStops
- Direct route exists
- No routes exist at all

---

## Requirement 10: Optimal Route with Constraints ⭐⭐⭐⭐⭐
**Focus**: Constrained optimization, advanced algorithms

### Description
Create a function `findOptimalRoute(weightedNetwork, start, end, constraints)` that finds the best route considering multiple constraints.

### Function Signature
```typescript
interface RouteConstraints {
  maxDuration?: number;      // Maximum acceptable travel time
  maxStops?: number;          // Maximum number of stops allowed
  avoid?: string[];           // Stations to avoid
  prefer?: string[];          // Stations that give -10 min bonus each
}

interface OptimalRouteResult {
  route: string[];
  duration: number;  // After prefer bonuses applied
  stops: number;
}

function findOptimalRoute(
  weightedNetwork: WeightedNetwork,
  start: string,
  end: string,
  constraints: RouteConstraints
): OptimalRouteResult | null
```

### Acceptance Criteria
- [ ] Meet all hard constraints (maxDuration, maxStops, avoid)
- [ ] Apply -10 minutes for each preferred station in route
- [ ] Return route with shortest duration (after bonuses)
- [ ] Use fewest stops as tiebreaker
- [ ] Return null if no valid route exists

### Example
```typescript
findOptimalRoute(weightedNetwork, 'A', 'F', {
  maxDuration: 120,
  maxStops: 5,
  avoid: ['B'],
  prefer: ['E']  // -10 minutes if route includes E
})

// Output: { route: ['A', 'C', 'E', 'F'], duration: 95, stops: 3 }
// Route includes E (preferred), avoids B, under constraints
```

### Priority Order
1. Must not violate hard constraints (max duration/stops, avoid)
2. Minimize duration (with prefer bonuses applied)
3. Minimize stops (tiebreaker)

### Test Cases
- Route respects avoid stations
- Route includes prefer stations when beneficial
- No valid route exists (constraints too strict)
- Multiple routes, one with preferred station is chosen
- Constraints not possible to satisfy
- maxDuration constraint eliminates some routes

---

## Getting Started

### Recommended Order
1. **Requirements 1-3**: Basic graph operations (1-2 hours)
2. **Requirements 4-5**: Simple path finding (2-3 hours)
3. **Requirements 6-7**: Weighted graphs (2-3 hours)
4. **Requirement 8**: Dijkstra's algorithm (3-4 hours)
5. **Requirement 9**: All paths DFS (2-3 hours)
6. **Requirement 10**: Constrained optimization (4-5 hours)

### Files Location
```
src/algorithms/
  ├── algorithm1.ts         # Implementations
  ├── algorithm1.test.ts    # Tests
  ├── algorithm2.ts
  ├── algorithm2.test.ts
  └── ... (through algorithm10)
```

### Test Data Available
Simple test network in `src/data/simpleNetwork.ts`:
```typescript
export const simpleConnections = [
  ['A', 'B'], ['B', 'C'], ['C', 'D'],
  ['A', 'C'], ['B', 'D']
];

export const weightedConnections = [
  ['A', 'B', 15], ['B', 'C', 20], ['C', 'D', 10],
  ['A', 'C', 40], ['B', 'D', 25]
];
```

## After Completing These

Once you've mastered these algorithm requirements, move on to **REQUIREMENTS.md** for the realistic Eurostar interview scenarios that combine these concepts with:
- Real-world data structures
- Timezone handling
- Schedule management
- Seat availability
- Multi-passenger optimization

Good luck! Remember: **Test-Driven Development** - write tests first!
