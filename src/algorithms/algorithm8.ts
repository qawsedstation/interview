/**
 * Algorithm 8: Find Fastest Route (Dijkstra)
 * Find route with minimum travel time using Dijkstra's algorithm
 */

import { WeightedNetwork, RouteResult } from './types';

/**
 * Find fastest route using Dijkstra's algorithm
 * @param weightedNetwork - Weighted network adjacency list
 * @param start - Start station
 * @param end - End station
 * @returns Route and duration, or null if no path
 */
export function findFastestRoute(
  weightedNetwork: WeightedNetwork,
  start: string,
  end: string
): RouteResult | null {
  // TODO: Implement Dijkstra's algorithm
  // Use priority queue (or simple array with sorting)
  // Track shortest distance and previous node for each station
  throw new Error('Not implemented yet - write your tests first!');
}
