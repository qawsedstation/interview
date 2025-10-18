/**
 * TypeScript type definitions for Eurostar interview challenge
 */

export type StationCode = string;
export type TrainNumber = string;

export enum TimeZone {
  GMT = 'Europe/London',
  CET = 'Europe/Paris'
}

export interface Station {
  code: StationCode;
  name: string;
  city: string;
  country: string;
  timezone: TimeZone;
}

export interface Route {
  from: StationCode;
  to: StationCode;
  distance: number; // in kilometers
}

export interface Journey {
  trainNumber: TrainNumber;
  from: StationCode;
  to: StationCode;
  departure: string; // HH:mm format
  arrival: string;   // HH:mm format
  availableSeats: number;
  days: DayOfWeek[];
}

export enum DayOfWeek {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

export interface RouteSegment {
  from: string;
  to: string;
  departure?: string;
  arrival?: string;
  trainNumber?: TrainNumber;
  duration?: string;
}

export interface CompleteRoute {
  legs: RouteSegment[];
  totalDuration?: string;
  departureTime?: string;
  arrivalTime?: string;
}

export interface FastestRouteQuery {
  origin: StationCode;
  destination: StationCode;
  departureAfter: string; // ISO datetime string
}

export interface FastestRouteWithAvailabilityQuery extends FastestRouteQuery {
  passengers: number;
}

export interface JourneyLeg {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  trainNumber: TrainNumber;
  availableSeats?: number;
  seatsNeeded?: number;
}

export interface FastestRouteResult {
  totalDuration: string;
  departureTime: string;
  arrivalTime: string;
  legs: JourneyLeg[];
}

export interface FastestRouteWithAvailabilityResult extends FastestRouteResult {
  seatsAvailable: boolean;
  alternatives?: AlternativeRoute[];
}

export interface AlternativeRoute {
  reason: string;
  totalDuration: string;
  legs: JourneyLeg[];
}

export interface EurostarData {
  stations: Station[];
  routes: Route[];
  journeys: Journey[];
}
