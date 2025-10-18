/**
 * Requirement 3: Calculate Journey Duration
 * Calculate total journey time including layovers and handle timezones
 */

import { CompleteRoute } from '../types';
import { journeys, getStationByCode } from '../data/eurostarRoutes';

export interface JourneyDurationResult {
  route: string;
  departureTime: string;
  arrivalTime: string;
  totalDuration: string;
  legs: LegDuration[];
  valid: boolean;
  error?: string;
}

export interface LegDuration {
  from: string;
  to: string;
  duration: string;
  layover?: string;
}

/**
 * Calculate journey duration for a given route
 * @param route - Complete route with all segments
 * @returns Journey duration details
 */
export function calculateJourneyDuration(route: CompleteRoute): JourneyDurationResult {
  // TODO: Implement this function using TDD
  // Remember: Write tests first, then make them pass!
  throw new Error('Not implemented yet - start by writing tests!');
}

/**
 * Helper: Format duration in minutes to "Xh Ym" format
 */
export function formatDuration(minutes: number): string {
  // TODO: Implement
  throw new Error('Not implemented yet');
}

/**
 * Helper: Validate connection has minimum 30 minutes layover
 */
export function isValidConnection(arrivalTime: string, departureTime: string): boolean {
  // TODO: Implement
  throw new Error('Not implemented yet');
}
