/**
 * Type definitions for algorithm requirements
 */

// Basic network types
export type Network = Record<string, string[]>;

// Weighted network types
export interface WeightedConnection {
  station: string;
  time: number;
}

export type WeightedNetwork = Record<string, WeightedConnection[]>;

// Route result types
export interface RouteResult {
  route: string[];
  duration: number;
}

// Constraint types for Requirement 10
export interface RouteConstraints {
  maxDuration?: number;      // Maximum acceptable travel time
  maxStops?: number;          // Maximum number of stops allowed
  avoid?: string[];           // Stations to avoid
  prefer?: string[];          // Stations that give -10 min bonus each
}

export interface OptimalRouteResult {
  route: string[];
  duration: number;  // After prefer bonuses applied
  stops: number;
}
