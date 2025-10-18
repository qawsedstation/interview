/**
 * Requirement 2: Find All Routes Between Two Stations
 * Find all possible routes (direct and with connections)
 */

import { Route, CompleteRoute } from '../types';
import { routes, getStationName } from '../data/eurostarRoutes';

/**
 * Find all routes between origin and destination
 * @param origin - Origin station code
 * @param destination - Destination station code
 * @param maxConnections - Maximum number of connections allowed (default: 2)
 * @returns Array of complete routes with all segments
 */
export function findAllRoutes(
  origin: string,
  destination: string,
  maxConnections: number = 2
): CompleteRoute[] {
  // TODO: Implement this function using TDD
  // Remember: Write tests first, then make them pass!
  throw new Error('Not implemented yet - start by writing tests!');
}
