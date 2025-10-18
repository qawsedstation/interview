# 📖 Complete Solutions Guide

## ⚠️ Important Notice

**Use this guide wisely!** This document contains complete solutions to all challenges. Try to solve problems yourself first before looking at solutions. Use this guide when:
- You're genuinely stuck after trying for 30+ minutes
- You want to verify your solution approach
- You want to learn alternative approaches
- You're reviewing after completing a challenge

---

## Table of Contents

### Algorithm Fundamentals
- [Algorithm 1: Build the Network](#algorithm-1-build-the-network)
- [Algorithm 2: Find Direct Connections](#algorithm-2-find-direct-connections)
- [Algorithm 3: Check if Route Exists](#algorithm-3-check-if-route-exists)
- [Algorithm 4: Find Shortest Path (BFS)](#algorithm-4-find-shortest-path-bfs)
- [Algorithm 5: Calculate Total Stops](#algorithm-5-calculate-total-stops)
- [Algorithm 6: Weighted Network with Travel Times](#algorithm-6-weighted-network-with-travel-times)
- [Algorithm 7: Calculate Route Duration](#algorithm-7-calculate-route-duration)
- [Algorithm 8: Find Fastest Route (Dijkstra)](#algorithm-8-find-fastest-route-dijkstra)
- [Algorithm 9: Find All Routes with Max Stops](#algorithm-9-find-all-routes-with-max-stops)
- [Algorithm 10: Optimal Route with Constraints](#algorithm-10-optimal-route-with-constraints)

### Eurostar Scenarios
- [Requirement 1: Basic Route Display](#requirement-1-basic-route-display)
- [Requirement 2: Find All Routes Between Stations](#requirement-2-find-all-routes-between-stations)
- [Requirement 3: Calculate Journey Duration](#requirement-3-calculate-journey-duration)
- [Requirement 4: Find Fastest Route](#requirement-4-find-fastest-route)
- [Requirement 5: Multi-Passenger Seat Availability](#requirement-5-multi-passenger-seat-availability)

---

# Algorithm Fundamentals

---

## Algorithm 1: Build the Network

### 📋 Problem Explanation

You need to convert an array of connections into an adjacency list, which is a common way to represent graphs in computer science.

**Input**: Array of connections like `[['A', 'B'], ['B', 'C']]`
**Output**: Object where each station has an array of connected stations

**Key Concept**: Bidirectional connections - if A connects to B, then B also connects to A.

### 🎯 Approach

1. Create an empty object to store the network
2. For each connection:
   - Add station2 to station1's connection list
   - Add station1 to station2's connection list (bidirectional)
3. Handle edge cases: empty input, duplicates

### 📝 Step-by-Step Solution

**Step 1**: Initialize the network object
```typescript
const network: Network = {};
```

**Step 2**: Iterate through each connection
```typescript
for (const [station1, station2] of connections) {
  // Process each connection
}
```

**Step 3**: Ensure both stations exist in network
```typescript
if (!network[station1]) {
  network[station1] = [];
}
if (!network[station2]) {
  network[station2] = [];
}
```

**Step 4**: Add bidirectional connections (check for duplicates)
```typescript
if (!network[station1].includes(station2)) {
  network[station1].push(station2);
}
if (!network[station2].includes(station1)) {
  network[station2].push(station1);
}
```

### ✅ Complete Implementation

```typescript
import { Network } from './types';

export function buildNetwork(connections: string[][]): Network {
  const network: Network = {};

  for (const [station1, station2] of connections) {
    // Initialize arrays if stations don't exist
    if (!network[station1]) {
      network[station1] = [];
    }
    if (!network[station2]) {
      network[station2] = [];
    }

    // Add bidirectional connections (avoid duplicates)
    if (!network[station1].includes(station2)) {
      network[station1].push(station2);
    }
    if (!network[station2].includes(station1)) {
      network[station2].push(station1);
    }
  }

  return network;
}
```

### 🧪 Test Examples

```typescript
// Test 1: Basic connections
const result = buildNetwork([['A', 'B'], ['B', 'C']]);
// Expected: { 'A': ['B'], 'B': ['A', 'C'], 'C': ['B'] }

// Test 2: Empty array
const result2 = buildNetwork([]);
// Expected: {}

// Test 3: Triangle network
const result3 = buildNetwork([['A', 'B'], ['B', 'C'], ['C', 'A']]);
// Expected: { 'A': ['B', 'C'], 'B': ['A', 'C'], 'C': ['B', 'A'] }
```

### ⚠️ Common Pitfalls

1. **Forgetting bidirectional connections** - Must add both directions
2. **Not checking for duplicates** - Same connection added twice
3. **Not initializing arrays** - Trying to push to undefined

### 💡 Key Takeaways

- Adjacency lists are efficient for sparse graphs
- Always consider bidirectional connections in undirected graphs
- Initialize data structures before using them

---

## Algorithm 2: Find Direct Connections

### 📋 Problem Explanation

Given a network (adjacency list) and a station name, return all stations directly connected to it.

**Input**: Network object and station name
**Output**: Array of connected station names

**Key Concept**: Simple lookup in the adjacency list.

### 🎯 Approach

1. Check if station exists in network
2. If exists, return its connection array
3. If not exists, return empty array

### 📝 Step-by-Step Solution

**Step 1**: Validate station exists
```typescript
if (!network[station]) {
  return [];
}
```

**Step 2**: Return connections
```typescript
return network[station];
```

That's it! This is a simple lookup problem.

### ✅ Complete Implementation

```typescript
import { Network } from './types';

export function getDirectConnections(network: Network, station: string): string[] {
  // Return empty array if station doesn't exist
  if (!network[station]) {
    return [];
  }

  // Return the array of connected stations
  return network[station];
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': ['B', 'C'],
  'B': ['A'],
  'C': ['A']
};

// Test 1: Station with multiple connections
getDirectConnections(network, 'A'); // ['B', 'C']

// Test 2: Station with single connection
getDirectConnections(network, 'B'); // ['A']

// Test 3: Non-existent station
getDirectConnections(network, 'Z'); // []

// Test 4: Isolated station (no connections)
network['D'] = [];
getDirectConnections(network, 'D'); // []
```

### ⚠️ Common Pitfalls

1. **Not handling undefined stations** - Must check existence first
2. **Returning the station itself** - Should only return connected stations
3. **Modifying the original array** - Return a copy if mutation is a concern

### 💡 Key Takeaways

- Simple problems can have simple solutions
- Always validate input before accessing properties
- Document edge cases clearly

---

## Algorithm 3: Check if Route Exists

### 📋 Problem Explanation

Check if two stations are directly connected (one hop away).

**Input**: Network, start station, end station
**Output**: Boolean (true if connected, false otherwise)

**Key Concept**: Check if end station is in start station's connection list.

### 🎯 Approach

1. Verify start station exists
2. Check if end station is in start's connections array
3. Return boolean result

### 📝 Step-by-Step Solution

**Step 1**: Check if start station exists
```typescript
if (!network[start]) {
  return false;
}
```

**Step 2**: Check if end is in start's connections
```typescript
return network[start].includes(end);
```

### ✅ Complete Implementation

```typescript
import { Network } from './types';

export function hasDirectRoute(
  network: Network,
  start: string,
  end: string
): boolean {
  // If start station doesn't exist, no route possible
  if (!network[start]) {
    return false;
  }

  // Check if end station is in start's connections
  return network[start].includes(end);
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B']
};

// Test 1: Direct connection exists
hasDirectRoute(network, 'A', 'B'); // true

// Test 2: Bidirectional check
hasDirectRoute(network, 'B', 'A'); // true

// Test 3: No direct connection
hasDirectRoute(network, 'A', 'C'); // false (requires hop through B)

// Test 4: Start station doesn't exist
hasDirectRoute(network, 'Z', 'A'); // false

// Test 5: End station doesn't exist
hasDirectRoute(network, 'A', 'Z'); // false
```

### ⚠️ Common Pitfalls

1. **Forgetting to check start exists** - Accessing undefined causes errors
2. **Not handling bidirectional** - The network should already be bidirectional from Algorithm 1
3. **Confusing with path existence** - This is DIRECT connection only

### 💡 Key Takeaways

- Validate input before operations
- Use built-in array methods (includes) for clarity
- Direct connection ≠ path existence (that's Algorithm 4)

---

## Algorithm 4: Find Shortest Path (BFS)

### 📋 Problem Explanation

Find the shortest path between two stations by number of hops (not distance). This is a classic graph problem solved with Breadth-First Search (BFS).

**Input**: Network, start station, end station
**Output**: Array representing path, or null if no path exists

**Key Concept**: BFS explores all neighbors at current depth before moving deeper, guaranteeing shortest path by hops.

### 🎯 Approach

1. Use a queue to track paths to explore
2. Use a Set to track visited stations
3. For each path, explore its neighbors
4. Return first path that reaches destination (guaranteed shortest)

### 📝 Step-by-Step Solution

**Step 1**: Handle edge cases
```typescript
// Start doesn't exist
if (!network[start]) return null;

// Start equals end
if (start === end) return [start];
```

**Step 2**: Initialize BFS data structures
```typescript
const queue: string[][] = [[start]]; // Queue of paths
const visited = new Set<string>([start]); // Visited stations
```

**Step 3**: BFS loop
```typescript
while (queue.length > 0) {
  const path = queue.shift()!; // Get first path from queue
  const current = path[path.length - 1]; // Last station in path

  // Explore neighbors...
}
```

**Step 4**: Explore neighbors
```typescript
for (const neighbor of network[current] || []) {
  // If we reached destination
  if (neighbor === end) {
    return [...path, neighbor];
  }

  // If not visited, add to queue
  if (!visited.has(neighbor)) {
    visited.add(neighbor);
    queue.push([...path, neighbor]);
  }
}
```

### ✅ Complete Implementation

```typescript
import { Network } from './types';

export function findShortestPath(
  network: Network,
  start: string,
  end: string
): string[] | null {
  // Edge cases
  if (!network[start]) return null;
  if (start === end) return [start];

  // BFS setup
  const queue: string[][] = [[start]];
  const visited = new Set<string>([start]);

  while (queue.length > 0) {
    const path = queue.shift()!;
    const current = path[path.length - 1];

    // Explore all neighbors
    for (const neighbor of network[current] || []) {
      // Found destination!
      if (neighbor === end) {
        return [...path, neighbor];
      }

      // Add unvisited neighbors to queue
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }

  // No path found
  return null;
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C']
};

// Test 1: Direct path
findShortestPath(network, 'A', 'B'); // ['A', 'B']

// Test 2: Two hops
findShortestPath(network, 'A', 'D'); // ['A', 'B', 'D'] or ['A', 'C', 'D']

// Test 3: No path
const disconnected = { 'A': ['B'], 'B': ['A'], 'C': ['D'], 'D': ['C'] };
findShortestPath(disconnected, 'A', 'C'); // null

// Test 4: Same start and end
findShortestPath(network, 'A', 'A'); // ['A']
```

### ⚠️ Common Pitfalls

1. **Using DFS instead of BFS** - DFS doesn't guarantee shortest path
2. **Not tracking visited stations** - Can cause infinite loops
3. **Forgetting to copy path** - Mutations can corrupt the queue
4. **Not handling disconnected graphs** - Must return null

### 💡 Key Takeaways

- BFS guarantees shortest path in unweighted graphs
- Queue (FIFO) is essential for BFS
- Visited set prevents infinite loops
- Always consider edge cases (same start/end, disconnected)

---

## Algorithm 5: Calculate Total Stops

### 📋 Problem Explanation

Count the number of stops (transitions) in a given route. Validate that each connection exists.

**Input**: Network and route (array of stations)
**Output**: Number of stops, or -1 if route is invalid

**Key Concept**: Stops = route length - 1. Must validate each connection.

### 🎯 Approach

1. Handle edge cases (empty, single station)
2. For each consecutive pair, verify connection exists
3. If all valid, return stops count
4. If any invalid, return -1

### 📝 Step-by-Step Solution

**Step 1**: Handle edge cases
```typescript
if (route.length === 0 || route.length === 1) {
  return 0;
}
```

**Step 2**: Validate each connection
```typescript
for (let i = 0; i < route.length - 1; i++) {
  const from = route[i];
  const to = route[i + 1];

  // Check if connection exists
  if (!network[from] || !network[from].includes(to)) {
    return -1; // Invalid connection
  }
}
```

**Step 3**: Return stop count
```typescript
return route.length - 1;
```

### ✅ Complete Implementation

```typescript
import { Network } from './types';

export function countStops(network: Network, route: string[]): number {
  // Edge cases
  if (route.length === 0 || route.length === 1) {
    return 0;
  }

  // Validate each connection in the route
  for (let i = 0; i < route.length - 1; i++) {
    const from = route[i];
    const to = route[i + 1];

    // Check if connection exists
    if (!network[from] || !network[from].includes(to)) {
      return -1; // Invalid connection
    }
  }

  // All connections valid, return stop count
  return route.length - 1;
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B']
};

// Test 1: Valid route
countStops(network, ['A', 'B', 'C']); // 2 (A→B, B→C)

// Test 2: Single station
countStops(network, ['A']); // 0

// Test 3: Empty route
countStops(network, []); // 0

// Test 4: Invalid connection
countStops(network, ['A', 'C']); // -1 (no direct A→C)

// Test 5: Non-existent station
countStops(network, ['A', 'Z']); // -1
```

### ⚠️ Common Pitfalls

1. **Off-by-one errors** - Stops = length - 1, not length
2. **Not validating all connections** - Must check each pair
3. **Wrong loop condition** - Loop to length - 1, not length
4. **Forgetting station existence check** - Must verify station exists in network

### 💡 Key Takeaways

- Validation is crucial for route integrity
- Edge cases matter (empty, single element)
- Clear error signaling (-1) helps debugging

---

## Algorithm 6: Weighted Network with Travel Times

### 📋 Problem Explanation

Build a weighted adjacency list where each connection includes travel time. This extends Algorithm 1 to handle weighted graphs.

**Input**: Array of `[station1, station2, time]` tuples
**Output**: Object where each station maps to array of `{station, time}` objects

**Key Concept**: Weighted graphs store additional data (weight) for each edge.

### 🎯 Approach

1. Similar to Algorithm 1, but store objects instead of strings
2. Each connection object contains `{ station, time }`
3. Still bidirectional - both directions get same travel time

### 📝 Step-by-Step Solution

**Step 1**: Initialize network
```typescript
const network: WeightedNetwork = {};
```

**Step 2**: Process each connection
```typescript
for (const [station1, station2, time] of connections) {
  // Initialize arrays
  if (!network[station1]) network[station1] = [];
  if (!network[station2]) network[station2] = [];

  // Add weighted connections
}
```

**Step 3**: Add bidirectional weighted connections
```typescript
// Check for duplicates
const alreadyHas1to2 = network[station1].some(c => c.station === station2);
if (!alreadyHas1to2) {
  network[station1].push({ station: station2, time });
}

const alreadyHas2to1 = network[station2].some(c => c.station === station1);
if (!alreadyHas2to1) {
  network[station2].push({ station: station1, time });
}
```

### ✅ Complete Implementation

```typescript
import { WeightedNetwork } from './types';

export function buildWeightedNetwork(
  connections: [string, string, number][]
): WeightedNetwork {
  const network: WeightedNetwork = {};

  for (const [station1, station2, time] of connections) {
    // Initialize arrays if needed
    if (!network[station1]) {
      network[station1] = [];
    }
    if (!network[station2]) {
      network[station2] = [];
    }

    // Check if connection already exists (avoid duplicates)
    const alreadyHas1to2 = network[station1].some(c => c.station === station2);
    if (!alreadyHas1to2) {
      network[station1].push({ station: station2, time });
    }

    const alreadyHas2to1 = network[station2].some(c => c.station === station1);
    if (!alreadyHas2to1) {
      network[station2].push({ station: station1, time });
    }
  }

  return network;
}
```

### 🧪 Test Examples

```typescript
// Test 1: Basic weighted connections
const result = buildWeightedNetwork([['A', 'B', 15], ['B', 'C', 20]]);
// Expected: {
//   'A': [{ station: 'B', time: 15 }],
//   'B': [{ station: 'A', time: 15 }, { station: 'C', time: 20 }],
//   'C': [{ station: 'B', time: 20 }]
// }

// Test 2: Empty array
buildWeightedNetwork([]); // {}

// Test 3: Multiple connections from same station
buildWeightedNetwork([['A', 'B', 10], ['A', 'C', 20]]);
// A has two connections with different times
```

### ⚠️ Common Pitfalls

1. **Forgetting to check duplicates with objects** - Use `.some()` instead of `.includes()`
2. **Different times for same connection** - Should keep first or handle somehow
3. **Not making bidirectional** - Both directions need the weight

### 💡 Key Takeaways

- Weighted graphs add complexity but enable optimization algorithms
- Use `.some()` for object array duplicate checking
- Same weight applies to both directions in undirected graphs

---

## Algorithm 7: Calculate Route Duration

### 📋 Problem Explanation

Calculate total travel time for a route in a weighted network.

**Input**: Weighted network and route (array of stations)
**Output**: Total duration in minutes, or -1 if invalid

**Key Concept**: Sum the travel times between consecutive stations.

### 🎯 Approach

1. Similar to Algorithm 5, but sum times instead of counting
2. For each pair, find the connection and add its time
3. Return -1 if any connection doesn't exist

### 📝 Step-by-Step Solution

**Step 1**: Handle edge cases
```typescript
if (route.length === 0 || route.length === 1) {
  return 0;
}
```

**Step 2**: Sum travel times
```typescript
let totalDuration = 0;

for (let i = 0; i < route.length - 1; i++) {
  const from = route[i];
  const to = route[i + 1];

  // Find connection with time
  const connection = weightedNetwork[from]?.find(c => c.station === to);

  if (!connection) {
    return -1; // Invalid connection
  }

  totalDuration += connection.time;
}
```

### ✅ Complete Implementation

```typescript
import { WeightedNetwork } from './types';

export function calculateDuration(
  weightedNetwork: WeightedNetwork,
  route: string[]
): number {
  // Edge cases
  if (route.length === 0 || route.length === 1) {
    return 0;
  }

  let totalDuration = 0;

  // Sum travel times for each leg
  for (let i = 0; i < route.length - 1; i++) {
    const from = route[i];
    const to = route[i + 1];

    // Find the connection and its travel time
    const connection = weightedNetwork[from]?.find(c => c.station === to);

    if (!connection) {
      return -1; // Invalid connection
    }

    totalDuration += connection.time;
  }

  return totalDuration;
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': [{ station: 'B', time: 15 }],
  'B': [{ station: 'A', time: 15 }, { station: 'C', time: 20 }],
  'C': [{ station: 'B', time: 20 }]
};

// Test 1: Valid route
calculateDuration(network, ['A', 'B', 'C']); // 35 (15 + 20)

// Test 2: Single station
calculateDuration(network, ['A']); // 0

// Test 3: Invalid connection
calculateDuration(network, ['A', 'C']); // -1
```

### ⚠️ Common Pitfalls

1. **Using wrong search method** - Use `.find()` not `.includes()`
2. **Not handling missing connections** - Check for undefined
3. **Forgetting optional chaining** - `network[from]?.find()` prevents errors

### 💡 Key Takeaways

- `.find()` is essential for searching object arrays
- Optional chaining (`?.`) prevents null reference errors
- Accumulate results in a loop for summation

---

## Algorithm 8: Find Fastest Route (Dijkstra)

### 📋 Problem Explanation

Find the route with minimum total travel time using Dijkstra's algorithm. Unlike BFS (Algorithm 4), this considers edge weights.

**Input**: Weighted network, start, end
**Output**: `{ route: string[], duration: number }` or null

**Key Concept**: Dijkstra's algorithm finds shortest path in weighted graphs using a priority queue.

### 🎯 Approach

1. Track shortest distance to each station
2. Track previous station in shortest path
3. Use priority queue (or simple array) to explore stations in order of distance
4. Reconstruct path from end to start using previous pointers

### 📝 Step-by-Step Solution

**Step 1**: Initialize data structures
```typescript
const distances: Record<string, number> = {};
const previous: Record<string, string | null> = {};
const unvisited = new Set<string>(Object.keys(weightedNetwork));

// Set all distances to Infinity except start
for (const station of unvisited) {
  distances[station] = station === start ? 0 : Infinity;
  previous[station] = null;
}
```

**Step 2**: Dijkstra's main loop
```typescript
while (unvisited.size > 0) {
  // Find unvisited station with smallest distance
  let current: string | null = null;
  let smallestDistance = Infinity;

  for (const station of unvisited) {
    if (distances[station] < smallestDistance) {
      smallestDistance = distances[station];
      current = station;
    }
  }

  // No path found
  if (current === null || distances[current] === Infinity) {
    break;
  }

  // Found destination!
  if (current === end) {
    break;
  }

  unvisited.delete(current);

  // Update neighbors...
}
```

**Step 3**: Update neighbor distances
```typescript
for (const neighbor of weightedNetwork[current] || []) {
  if (!unvisited.has(neighbor.station)) continue;

  const newDistance = distances[current] + neighbor.time;

  if (newDistance < distances[neighbor.station]) {
    distances[neighbor.station] = newDistance;
    previous[neighbor.station] = current;
  }
}
```

**Step 4**: Reconstruct path
```typescript
if (distances[end] === Infinity) return null;

const route: string[] = [];
let current: string | null = end;

while (current !== null) {
  route.unshift(current);
  current = previous[current];
}

return { route, duration: distances[end] };
```

### ✅ Complete Implementation

```typescript
import { WeightedNetwork, RouteResult } from './types';

export function findFastestRoute(
  weightedNetwork: WeightedNetwork,
  start: string,
  end: string
): RouteResult | null {
  // Edge cases
  if (!weightedNetwork[start]) return null;
  if (start === end) return { route: [start], duration: 0 };

  // Initialize
  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const unvisited = new Set<string>(Object.keys(weightedNetwork));

  for (const station of unvisited) {
    distances[station] = station === start ? 0 : Infinity;
    previous[station] = null;
  }

  // Dijkstra's algorithm
  while (unvisited.size > 0) {
    // Find unvisited station with smallest distance
    let current: string | null = null;
    let smallestDistance = Infinity;

    for (const station of unvisited) {
      if (distances[station] < smallestDistance) {
        smallestDistance = distances[station];
        current = station;
      }
    }

    // No path exists
    if (current === null || distances[current] === Infinity) {
      break;
    }

    // Found destination
    if (current === end) {
      break;
    }

    unvisited.delete(current);

    // Update distances to neighbors
    for (const neighbor of weightedNetwork[current] || []) {
      if (!unvisited.has(neighbor.station)) continue;

      const newDistance = distances[current] + neighbor.time;

      if (newDistance < distances[neighbor.station]) {
        distances[neighbor.station] = newDistance;
        previous[neighbor.station] = current;
      }
    }
  }

  // Check if end is reachable
  if (distances[end] === Infinity) {
    return null;
  }

  // Reconstruct path
  const route: string[] = [];
  let current: string | null = end;

  while (current !== null) {
    route.unshift(current);
    current = previous[current];
  }

  return {
    route,
    duration: distances[end]
  };
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': [{ station: 'B', time: 50 }, { station: 'C', time: 20 }],
  'B': [{ station: 'A', time: 50 }, { station: 'D', time: 10 }],
  'C': [{ station: 'A', time: 20 }, { station: 'D', time: 25 }],
  'D': [{ station: 'B', time: 10 }, { station: 'C', time: 25 }]
};

// Test 1: Fastest route might have more hops
findFastestRoute(network, 'A', 'D');
// { route: ['A', 'C', 'D'], duration: 45 }
// Not ['A', 'B', 'D'] (60 minutes) even though it's fewer stops

// Test 2: Direct is fastest
const simple = {
  'A': [{ station: 'B', time: 10 }, { station: 'C', time: 50 }],
  'B': [{ station: 'A', time: 10 }, { station: 'C', time: 5 }],
  'C': [{ station: 'A', time: 50 }, { station: 'B', time: 5 }]
};
findFastestRoute(simple, 'A', 'C');
// { route: ['A', 'B', 'C'], duration: 15 } (not direct 50)
```

### ⚠️ Common Pitfalls

1. **Using BFS instead** - BFS finds shortest by hops, not weight
2. **Not handling Infinity correctly** - Check before returning
3. **Wrong path reconstruction** - Must use `unshift` to build path backward
4. **Forgetting edge cases** - Same start/end, missing stations

### 💡 Key Takeaways

- Dijkstra's guarantees shortest path in weighted graphs with non-negative weights
- Priority queue improves performance (our simple version is O(n²))
- Reconstruct path backward using previous pointers
- This is a foundational algorithm - understand it well!

---

# Solutions Guide - Part 2

## Algorithm 9: Find All Routes with Max Stops

### 📋 Problem Explanation

Find ALL possible routes between two stations with a maximum number of stops, using Depth-First Search with backtracking.

**Input**: Network, start, end, maxStops
**Output**: Array of all valid routes (each route is an array of stations)

**Key Concept**: DFS with backtracking explores all paths systematically.

### 🎯 Approach

1. Use recursive DFS to explore all paths
2. Track visited stations to avoid cycles
3. Stop recursion when maxStops reached
4. Collect all valid paths that reach destination

### 📝 Step-by-Step Solution

**Step 1**: Main function setup
```typescript
const allRoutes: string[][] = [];
const visited = new Set<string>();

function dfs(current: string, path: string[], stopsRemaining: number) {
  // DFS logic here
}

dfs(start, [start], maxStops);
return allRoutes;
```

**Step 2**: DFS recursive function
```typescript
function dfs(current: string, path: string[], stopsRemaining: number) {
  // Found destination!
  if (current === end) {
    allRoutes.push([...path]);
    return; // Continue exploring other paths
  }

  // No more stops allowed
  if (stopsRemaining === 0) {
    return;
  }

  // Explore neighbors...
}
```

**Step 3**: Explore neighbors with backtracking
```typescript
visited.add(current);

for (const neighbor of network[current] || []) {
  // Avoid cycles
  if (!visited.has(neighbor)) {
    dfs(neighbor, [...path, neighbor], stopsRemaining - 1);
  }
}

visited.delete(current); // Backtrack
```

### ✅ Complete Implementation

```typescript
import { Network } from './types';

export function findAllRoutes(
  network: Network,
  start: string,
  end: string,
  maxStops: number
): string[][] {
  const allRoutes: string[][] = [];
  const visited = new Set<string>();

  function dfs(current: string, path: string[], stopsRemaining: number) {
    // Found destination
    if (current === end) {
      allRoutes.push([...path]);
      return; // Don't stop - there might be other paths
    }

    // No more stops allowed
    if (stopsRemaining === 0) {
      return;
    }

    // Mark as visited
    visited.add(current);

    // Explore all neighbors
    for (const neighbor of network[current] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, [...path, neighbor], stopsRemaining - 1);
      }
    }

    // Backtrack - unmark as visited
    visited.delete(current);
  }

  // Start DFS
  if (network[start]) {
    dfs(start, [start], maxStops);
  }

  return allRoutes;
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C']
};

// Test 1: Find all routes within 3 stops
findAllRoutes(network, 'A', 'D', 3);
// [['A', 'B', 'D'], ['A', 'C', 'D']]

// Test 2: Max stops too small
findAllRoutes(network, 'A', 'D', 1);
// [] (need at least 2 stops)

// Test 3: Exactly max stops
findAllRoutes(network, 'A', 'D', 2);
// [['A', 'B', 'D'], ['A', 'C', 'D']]

// Test 4: More complex network with multiple paths
const complex = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D', 'E'],
  'D': ['F'],
  'E': ['F'],
  'F': []
};
findAllRoutes(complex, 'A', 'F', 4);
// [['A', 'B', 'D', 'F'], ['A', 'C', 'D', 'F'], ['A', 'C', 'E', 'F']]
```

### ⚠️ Common Pitfalls

1. **Not backtracking** - Must remove from visited set after exploring
2. **Not copying path** - `[...path, neighbor]` creates new array
3. **Stopping at first route** - Should collect ALL routes
4. **Off-by-one with stops** - Be clear if maxStops is inclusive/exclusive

### 💡 Key Takeaways

- DFS with backtracking explores all possible paths
- Visited set prevents infinite loops
- Backtracking (removing from visited) allows same node in different paths
- This can be expensive for large graphs (exponential complexity)

---

## Algorithm 10: Optimal Route with Constraints

### 📋 Problem Explanation

Find the best route considering multiple constraints: max duration, max stops, stations to avoid, and preferred stations (with bonuses).

**Input**: Weighted network, start, end, constraints object
**Output**: Best route with duration and stops, or null

**Key Concept**: Combine path finding with constraint checking and optimization.

### 🎯 Approach

1. Find all possible routes (using DFS from Algorithm 9)
2. Filter out routes that violate hard constraints
3. Apply bonuses for preferred stations
4. Select route with minimum adjusted duration
5. Use fewest stops as tiebreaker

### 📝 Step-by-Step Solution

**Step 1**: Find all candidate routes
```typescript
// Use DFS to find all routes within maxStops
const maxStopsLimit = constraints.maxStops ?? Infinity;
const allRoutes = findAllRoutesHelper(weightedNetwork, start, end, maxStopsLimit);
```

**Step 2**: Filter by hard constraints
```typescript
const validRoutes = allRoutes.filter(route => {
  // Check avoid list
  if (constraints.avoid) {
    for (const avoidStation of constraints.avoid) {
      if (route.includes(avoidStation)) {
        return false;
      }
    }
  }

  // Calculate actual duration
  const duration = calculateRouteTime(weightedNetwork, route);
  if (duration === -1) return false;

  // Check maxDuration constraint
  if (constraints.maxDuration && duration > constraints.maxDuration) {
    return false;
  }

  return true;
});
```

**Step 3**: Calculate adjusted durations with prefer bonuses
```typescript
const routesWithScores = validRoutes.map(route => {
  const actualDuration = calculateRouteTime(weightedNetwork, route);
  let adjustedDuration = actualDuration;

  // Apply -10 min bonus for each preferred station
  if (constraints.prefer) {
    for (const preferStation of constraints.prefer) {
      if (route.includes(preferStation)) {
        adjustedDuration -= 10;
      }
    }
  }

  return {
    route,
    actualDuration,
    adjustedDuration,
    stops: route.length - 1
  };
});
```

**Step 4**: Select best route
```typescript
// Sort by adjusted duration, then by stops
routesWithScores.sort((a, b) => {
  if (a.adjustedDuration !== b.adjustedDuration) {
    return a.adjustedDuration - b.adjustedDuration;
  }
  return a.stops - b.stops; // Tiebreaker: fewer stops
});

const best = routesWithScores[0];
```

### ✅ Complete Implementation

```typescript
import { WeightedNetwork, RouteConstraints, OptimalRouteResult } from './types';

export function findOptimalRoute(
  weightedNetwork: WeightedNetwork,
  start: string,
  end: string,
  constraints: RouteConstraints
): OptimalRouteResult | null {
  // Find all possible routes
  const maxStops = constraints.maxStops ?? 10; // Default limit
  const allRoutes = findAllRoutesWeighted(weightedNetwork, start, end, maxStops);

  if (allRoutes.length === 0) {
    return null;
  }

  // Filter and score routes
  const validRoutes: Array<{
    route: string[];
    duration: number;
    adjustedDuration: number;
    stops: number;
  }> = [];

  for (const route of allRoutes) {
    // Check avoid constraint
    if (constraints.avoid) {
      const hasAvoidedStation = constraints.avoid.some(station => route.includes(station));
      if (hasAvoidedStation) continue;
    }

    // Calculate actual duration
    const duration = calculateDurationHelper(weightedNetwork, route);
    if (duration === -1) continue; // Invalid route

    // Check maxDuration constraint
    if (constraints.maxDuration && duration > constraints.maxDuration) {
      continue;
    }

    // Calculate adjusted duration with prefer bonuses
    let adjustedDuration = duration;
    if (constraints.prefer) {
      for (const preferStation of constraints.prefer) {
        if (route.includes(preferStation)) {
          adjustedDuration -= 10; // -10 min bonus per preferred station
        }
      }
    }

    validRoutes.push({
      route,
      duration: adjustedDuration, // Return adjusted duration
      adjustedDuration,
      stops: route.length - 1
    });
  }

  if (validRoutes.length === 0) {
    return null;
  }

  // Sort by adjusted duration, then by stops
  validRoutes.sort((a, b) => {
    if (a.adjustedDuration !== b.adjustedDuration) {
      return a.adjustedDuration - b.adjustedDuration;
    }
    return a.stops - b.stops;
  });

  const best = validRoutes[0];

  return {
    route: best.route,
    duration: best.duration,
    stops: best.stops
  };
}

// Helper: DFS to find all routes in weighted network
function findAllRoutesWeighted(
  network: WeightedNetwork,
  start: string,
  end: string,
  maxStops: number
): string[][] {
  const allRoutes: string[][] = [];
  const visited = new Set<string>();

  function dfs(current: string, path: string[], stopsRemaining: number) {
    if (current === end) {
      allRoutes.push([...path]);
      return;
    }

    if (stopsRemaining === 0) {
      return;
    }

    visited.add(current);

    for (const neighbor of network[current] || []) {
      if (!visited.has(neighbor.station)) {
        dfs(neighbor.station, [...path, neighbor.station], stopsRemaining - 1);
      }
    }

    visited.delete(current);
  }

  if (network[start]) {
    dfs(start, [start], maxStops);
  }

  return allRoutes;
}

// Helper: Calculate duration for route
function calculateDurationHelper(network: WeightedNetwork, route: string[]): number {
  if (route.length <= 1) return 0;

  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const connection = network[route[i]]?.find(c => c.station === route[i + 1]);
    if (!connection) return -1;
    total += connection.time;
  }
  return total;
}
```

### 🧪 Test Examples

```typescript
const network = {
  'A': [{ station: 'B', time: 30 }, { station: 'C', time: 50 }],
  'B': [{ station: 'A', time: 30 }, { station: 'F', time: 100 }],
  'C': [{ station: 'A', time: 50 }, { station: 'E', time: 40 }],
  'E': [{ station: 'C', time: 40 }, { station: 'F', time: 30 }],
  'F': [{ station: 'B', time: 100 }, { station: 'E', time: 30 }]
};

// Test 1: With prefer bonus
findOptimalRoute(network, 'A', 'F', {
  maxDuration: 150,
  maxStops: 5,
  avoid: ['B'],
  prefer: ['E']
});
// { route: ['A', 'C', 'E', 'F'], duration: 110 (120 - 10 bonus), stops: 3 }
// Route via B is avoided, E gets -10 bonus

// Test 2: No valid route due to constraints
findOptimalRoute(network, 'A', 'F', {
  maxDuration: 50,  // Too strict
  maxStops: 5
});
// null

// Test 3: Multiple preferred stations
findOptimalRoute(network, 'A', 'F', {
  prefer: ['C', 'E']  // Both get -10
});
// Route with both C and E gets -20 total bonus
```

### ⚠️ Common Pitfalls

1. **Returning actual duration instead of adjusted** - Return the bonus-applied duration
2. **Not handling empty constraints** - Use optional chaining and defaults
3. **Wrong constraint precedence** - Hard constraints filter first, then optimize
4. **Forgetting tiebreaker** - When durations equal, choose fewer stops

### 💡 Key Takeaways

- Constrained optimization combines multiple techniques
- Filter hard constraints, optimize soft constraints
- Prefer bonuses create interesting optimization problems
- Real interviews often have similar multi-constraint problems

---


# Eurostar Scenarios

---

## Requirement 1: Basic Route Display

### 📋 Problem Explanation

Display all direct train connections in the format "Origin → Destination" using real Eurostar data.

**Input**: Eurostar routes array (from `eurostarRoutes.ts`)
**Output**: Array of formatted strings

**Key Concept**: Map over routes and format station names using helper functions.

### 🎯 Approach

1. Import routes data and getStationName helper
2. Map each route to formatted string
3. Use getStationName() to convert codes to full names

### ✅ Complete Implementation

```typescript
import { Route } from '../types';
import { routes, getStationName } from '../data/eurostarRoutes';

export function displayDirectRoutes(routeData: Route[] = routes): string[] {
  return routeData.map(route => {
    const fromName = getStationName(route.from);
    const toName = getStationName(route.to);
    return `${fromName} → ${toName}`;
  });
}
```

### 🧪 Test Example

```typescript
displayDirectRoutes();
// [
//   "London St Pancras International → Paris Gare du Nord",
//   "Paris Gare du Nord → London St Pancras International",
//   "London St Pancras International → Brussels Midi/Zuid",
//   ...
// ]
```

### ⚠️ Common Pitfalls

1. **Not using helper functions** - getStationName() is provided for you
2. **Forgetting the arrow symbol** - Use → not ->
3. **Not handling missing stations** - getStationName() handles this

### 💡 Key Takeaways

- Use provided helper functions
- Array.map() is perfect for transformations
- Clean, simple solutions are often best

---

## Requirement 2: Find All Routes Between Stations

### 📋 Problem Explanation

Find all possible routes (direct and with connections) between two Eurostar stations, limited to max 2 connections.

**Input**: Origin code, destination code, max connections (default 2)
**Output**: Array of CompleteRoute objects with all legs

**Key Concept**: Similar to Algorithm 4 and 9, but with real Eurostar data.

### 🎯 Approach

1. Use DFS with backtracking (like Algorithm 9)
2. Build adjacency list from routes
3. Limit to maxConnections depth
4. Return routes with all segment details

### ✅ Complete Implementation

```typescript
import { Route, CompleteRoute, RouteSegment } from '../types';
import { routes, getStationName } from '../data/eurostarRoutes';

export function findAllRoutes(
  origin: string,
  destination: string,
  maxConnections: number = 2
): CompleteRoute[] {
  // Build network from routes
  const network: Record<string, string[]> = {};
  for (const route of routes) {
    if (!network[route.from]) network[route.from] = [];
    if (!network[route.to]) network[route.to] = [];
    if (!network[route.from].includes(route.to)) {
      network[route.from].push(route.to);
    }
    if (!network[route.to].includes(route.from)) {
      network[route.to].push(route.from);
    }
  }

  const allRoutes: string[][] = [];
  const visited = new Set<string>();

  // DFS to find all paths
  function dfs(current: string, path: string[], connectionsRemaining: number) {
    if (current === destination) {
      allRoutes.push([...path]);
      return;
    }

    if (connectionsRemaining < 0) {
      return;
    }

    visited.add(current);

    for (const neighbor of network[current] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, [...path, neighbor], connectionsRemaining - 1);
      }
    }

    visited.delete(current);
  }

  if (network[origin]) {
    dfs(origin, [origin], maxConnections);
  }

  // Convert to CompleteRoute format
  return allRoutes.map(path => {
    const legs: RouteSegment[] = [];
    for (let i = 0; i < path.length - 1; i++) {
      legs.push({
        from: getStationName(path[i]),
        to: getStationName(path[i + 1])
      });
    }
    return { legs };
  });
}
```

### 💡 Key Takeaways

- Reuse algorithm knowledge (DFS from Algorithm 9)
- Adapt to specific data structure (CompleteRoute)
- Build network from data first

---

## Requirement 3: Calculate Journey Duration

### 📋 Problem Explanation

Calculate total journey time including:
- Travel time for each leg
- Layover time at connections
- Timezone conversions (London GMT, Paris/Brussels/Amsterdam CET)
- Minimum 30-minute connection validation

**Input**: CompleteRoute with journey details
**Output**: JourneyDurationResult with breakdown

**Key Concept**: Time calculation + timezone handling + validation.

### 🎯 Approach

1. For each leg, find matching journey with times
2. Convert times to common timezone for calculation
3. Calculate leg duration
4. Calculate layover (arrival at connection - departure of next leg)
5. Validate minimum 30-minute layover
6. Sum all durations

### ✅ Key Implementation Points

```typescript
import { CompleteRoute, JourneyDurationResult } from '../types';
import { journeys, getStationByCode } from '../data/eurostarRoutes';

export function calculateJourneyDuration(route: CompleteRoute): JourneyDurationResult {
  // Helper: Parse time string to minutes
  function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Helper: Format minutes to "Xh Ym"
  function formatDuration(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }

  // Helper: Validate 30-min minimum connection
  function isValidConnection(arrivalTime: string, departureTime: string): boolean {
    const arrivalMins = timeToMinutes(arrivalTime);
    const departureMins = timeToMinutes(departureTime);
    const layover = departureMins - arrivalMins;
    return layover >= 30;
  }

  // Calculate for each leg...
  let totalMinutes = 0;
  const legs: any[] = [];

  for (let i = 0; i < route.legs.length; i++) {
    const leg = route.legs[i];

    // Find journey for this leg
    const journey = journeys.find(j => 
      j.from === leg.from && j.to === leg.to
    );

    if (!journey) {
      return {
        route: '',
        departureTime: '',
        arrivalTime: '',
        totalDuration: '',
        legs: [],
        valid: false,
        error: 'Journey not found'
      };
    }

    // Calculate leg duration
    const depMins = timeToMinutes(journey.departure);
    const arrMins = timeToMinutes(journey.arrival);
    const legDuration = arrMins - depMins;

    totalMinutes += legDuration;

    // Check layover if not last leg
    if (i < route.legs.length - 1) {
      const nextJourney = journeys.find(j => 
        j.from === route.legs[i + 1].from
      );

      if (nextJourney) {
        const layoverValid = isValidConnection(journey.arrival, nextJourney.departure);
        if (!layoverValid) {
          return {
            route: '',
            departureTime: '',
            arrivalTime: '',
            totalDuration: '',
            legs: [],
            valid: false,
            error: 'Layover too short (< 30 min)'
          };
        }

        const layoverMins = timeToMinutes(nextJourney.departure) - timeToMinutes(journey.arrival);
        totalMinutes += layoverMins;

        legs.push({
          from: leg.from,
          to: leg.to,
          duration: formatDuration(legDuration),
          layover: formatDuration(layoverMins)
        });
      }
    } else {
      legs.push({
        from: leg.from,
        to: leg.to,
        duration: formatDuration(legDuration)
      });
    }
  }

  return {
    route: route.legs.map(l => `${l.from} → ${l.to}`).join(', '),
    departureTime: '', // Fill from first journey
    arrivalTime: '',   // Fill from last journey
    totalDuration: formatDuration(totalMinutes),
    legs,
    valid: true
  };
}
```

### ⚠️ Common Pitfalls

1. **Timezone confusion** - Convert to minutes in same timezone
2. **Not validating layovers** - Must check 30-min minimum
3. **Time parsing errors** - Handle "HH:mm" format carefully
4. **Midnight crossing** - Handle next-day arrivals

### 💡 Key Takeaways

- Time math requires careful handling
- Helper functions keep code clean
- Validation is critical for real-world scenarios
- Timezones add complexity

---

## Requirement 4: Find Fastest Route

### 📋 Problem Explanation

Find the route with minimum total journey time given a departure time, considering:
- Actual scheduled train times
- Available connections
- Minimum 30-minute layovers
- Departure after specified time

**Input**: FastestRouteQuery (origin, destination, departureAfter)
**Output**: FastestRouteResult with complete itinerary

**Key Concept**: Dijkstra's algorithm + real scheduling data.

### 🎯 Approach

1. Find all available journeys after departure time
2. Use modified Dijkstra's to find fastest route
3. Consider actual train schedules (not just distances)
4. Validate connections have sufficient layover
5. Return complete journey details

### ✅ Key Implementation Sketch

```typescript
export function findFastestRoute(query: FastestRouteQuery): FastestRouteResult | null {
  // 1. Parse departureAfter to get time
  const requestedDeparture = new Date(query.departureAfter);

  // 2. Find all available journeys from origin after this time
  const availableJourneys = journeys.filter(j =>
    j.from === query.origin &&
    // Check if departure is after requested time
    isAfterTime(j.departure, requestedDeparture)
  );

  // 3. Build time-based graph (station+time combinations)
  // 4. Use Dijkstra's with time as weight
  // 5. Track arrival times, not just durations
  // 6. Validate connection times (30-min minimum)

  // Simplified approach:
  // - Try all first-leg journeys
  // - For each, find valid connections
  // - Calculate total journey time
  // - Return fastest

  let fastestRoute: FastestRouteResult | null = null;
  let shortestDuration = Infinity;

  for (const firstJourney of availableJourneys) {
    // Check if direct
    if (firstJourney.to === query.destination) {
      const duration = calculateDuration(firstJourney);
      if (duration < shortestDuration) {
        fastestRoute = {
          totalDuration: formatDuration(duration),
          departureTime: firstJourney.departure,
          arrivalTime: firstJourney.arrival,
          legs: [{
            from: getStationName(firstJourney.from),
            to: getStationName(firstJourney.to),
            departure: firstJourney.departure,
            arrival: firstJourney.arrival,
            trainNumber: firstJourney.trainNumber
          }]
        };
        shortestDuration = duration;
      }
    }

    // Check connections...
    const connectingJourneys = journeys.filter(j =>
      j.from === firstJourney.to &&
      hasValidLayover(firstJourney.arrival, j.departure)
    );

    for (const secondJourney of connectingJourneys) {
      if (secondJourney.to === query.destination) {
        const totalDuration = calculateTotalDuration([firstJourney, secondJourney]);
        if (totalDuration < shortestDuration) {
          // Update fastestRoute...
          shortestDuration = totalDuration;
        }
      }
    }
  }

  return fastestRoute;
}
```

### 💡 Key Takeaways

- Real scheduling adds complexity
- Need to consider actual train times, not just network structure
- Validation (layovers, times) is critical
- This combines many concepts: graph algorithms + time handling + data filtering

---

## Requirement 5: Multi-Passenger Seat Availability

### 📋 Problem Explanation

Find fastest route with seat availability for multiple passengers. If a route doesn't have enough seats, find alternatives.

**Input**: FastestRouteWithAvailabilityQuery (includes passenger count)
**Output**: OptimalRouteResult with seat details and alternatives

**Key Concept**: Requirement 4 + capacity constraints + alternative routing.

### 🎯 Approach

1. Find fastest routes (from Requirement 4)
2. For each route, check seat availability on all legs
3. Filter out routes with insufficient capacity
4. If multiple valid routes, choose fastest
5. Provide alternatives with different trade-offs

### ✅ Key Implementation Sketch

```typescript
export function findFastestRouteWithAvailability(
  query: FastestRouteWithAvailabilityQuery
): FastestRouteWithAvailabilityResult | null {
  // Validate passengers
  if (query.passengers <= 0) {
    return null;
  }

  // 1. Find all candidate routes (like Requirement 4)
  const allCandidateRoutes = findAllPossibleRoutes(query.origin, query.destination, query.departureAfter);

  // 2. Check each route for capacity
  const routesWithCapacity: any[] = [];

  for (const route of allCandidateRoutes) {
    let hasCapacity = true;

    for (const leg of route.legs) {
      const journey = journeys.find(j =>
        j.from === leg.from &&
        j.to === leg.to &&
        j.trainNumber === leg.trainNumber
      );

      if (!journey || journey.availableSeats < query.passengers) {
        hasCapacity = false;
        break;
      }
    }

    if (hasCapacity) {
      routesWithCapacity.push({
        ...route,
        seatsAvailable: true
      });
    }
  }

  if (routesWithCapacity.length === 0) {
    return null; // No routes with sufficient capacity
  }

  // 3. Sort by duration
  routesWithCapacity.sort((a, b) => a.totalDurationMinutes - b.totalDurationMinutes);

  const best = routesWithCapacity[0];

  // 4. Find alternatives (next 2-3 fastest routes)
  const alternatives = routesWithCapacity.slice(1, 4).map(r => ({
    reason: `Alternative route via ${r.legs.map(l => l.to).join(', ')}`,
    totalDuration: r.totalDuration,
    legs: r.legs
  }));

  return {
    ...best,
    seatsAvailable: true,
    alternatives: alternatives.length > 0 ? alternatives : undefined
  };
}
```

### 💡 Key Takeaways

- Build on previous requirements
- Add capacity checking as filter step
- Alternatives provide better UX
- Real-world problems often have multiple constraints

---

## 🎓 Final Tips for Using This Guide

1. **Try First**: Always attempt the problem yourself before looking
2. **Understand, Don't Copy**: Read to understand the approach, then code yourself
3. **Adapt**: These solutions are guides - your implementation can vary
4. **Practice**: Repetition builds mastery
5. **Explain Out Loud**: Practice explaining your solution as if in an interview

## ✅ Progress Checklist

Use this to track your mastery:

### Algorithms
- [ ] Can implement buildNetwork() from memory
- [ ] Understand BFS vs DFS differences
- [ ] Can explain Dijkstra's algorithm
- [ ] Comfortable with backtracking
- [ ] Can handle constrained optimization

### Eurostar
- [ ] Can work with real data structures
- [ ] Handle time calculations correctly
- [ ] Apply algorithms to realistic problems
- [ ] Validate constraints properly
- [ ] Provide alternative solutions

---

**Good luck with your interview! 🚂**

