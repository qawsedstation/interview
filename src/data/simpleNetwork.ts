/**
 * Simple network data for algorithm practice
 * Uses simple station names (A, B, C, D, E, F) for easier testing
 */

/**
 * Basic connections for Requirements 1-5, 9
 * Creates a network like:
 *     A --- B --- D --- F
 *     |     |     |
 *     C ----+     E
 */
export const simpleConnections: string[][] = [
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'C'],
  ['B', 'D'],
  ['D', 'E'],
  ['D', 'F']
];

/**
 * Weighted connections for Requirements 6-8, 10
 * [station1, station2, travelTimeInMinutes]
 *
 * Network structure with travel times:
 *     A --15-- B --20-- D --10-- F
 *     |        |        |
 *    40       25       15
 *     |        |        |
 *     C -------+        E
 */
export const weightedConnections: [string, string, number][] = [
  ['A', 'B', 15],
  ['A', 'C', 40],
  ['B', 'C', 25],
  ['B', 'D', 20],
  ['D', 'E', 15],
  ['D', 'F', 10]
];

/**
 * Complex weighted network for Requirement 10
 * Includes more routes and alternative paths
 */
export const complexWeightedConnections: [string, string, number][] = [
  ['A', 'B', 15],
  ['A', 'C', 40],
  ['A', 'E', 60],  // Alternative longer route
  ['B', 'C', 25],
  ['B', 'D', 20],
  ['C', 'D', 30],
  ['C', 'E', 20],
  ['D', 'E', 15],
  ['D', 'F', 10],
  ['E', 'F', 25]
];

/**
 * Helper: Get a basic test network
 */
export function getSimpleNetwork() {
  return {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B'],
    'D': ['B', 'E', 'F'],
    'E': ['D'],
    'F': ['D']
  };
}

/**
 * Helper: Get a weighted test network
 */
export function getWeightedNetwork() {
  return {
    'A': [
      { station: 'B', time: 15 },
      { station: 'C', time: 40 }
    ],
    'B': [
      { station: 'A', time: 15 },
      { station: 'C', time: 25 },
      { station: 'D', time: 20 }
    ],
    'C': [
      { station: 'A', time: 40 },
      { station: 'B', time: 25 }
    ],
    'D': [
      { station: 'B', time: 20 },
      { station: 'E', time: 15 },
      { station: 'F', time: 10 }
    ],
    'E': [
      { station: 'D', time: 15 }
    ],
    'F': [
      { station: 'D', time: 10 }
    ]
  };
}
