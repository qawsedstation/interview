/**
 * Eurostar Routes Dataset
 * This file contains real Eurostar network data for the interview challenge
 */

import { Station, Route, Journey, TimeZone, DayOfWeek, EurostarData } from '../types';

/**
 * Eurostar Station Network
 */
export const stations: Station[] = [
  {
    code: 'GBQQS',
    name: 'London St Pancras International',
    city: 'London',
    country: 'United Kingdom',
    timezone: TimeZone.GMT
  },
  {
    code: 'FRPNO',
    name: 'Paris Gare du Nord',
    city: 'Paris',
    country: 'France',
    timezone: TimeZone.CET
  },
  {
    code: 'FRMLV',
    name: 'Marne-la-Vallée Chessy',
    city: 'Marne-la-Vallée',
    country: 'France',
    timezone: TimeZone.CET
  },
  {
    code: 'FRLPD',
    name: 'Lyon Part-Dieu',
    city: 'Lyon',
    country: 'France',
    timezone: TimeZone.CET
  },
  {
    code: 'FRMSC',
    name: 'Marseille St-Charles',
    city: 'Marseille',
    country: 'France',
    timezone: TimeZone.CET
  },
  {
    code: 'FRAVI',
    name: 'Avignon TGV',
    city: 'Avignon',
    country: 'France',
    timezone: TimeZone.CET
  },
  {
    code: 'BEMMB',
    name: 'Brussels Midi/Zuid',
    city: 'Brussels',
    country: 'Belgium',
    timezone: TimeZone.CET
  },
  {
    code: 'NLAMS',
    name: 'Amsterdam Centraal',
    city: 'Amsterdam',
    country: 'Netherlands',
    timezone: TimeZone.CET
  },
  {
    code: 'NLRTD',
    name: 'Rotterdam Centraal',
    city: 'Rotterdam',
    country: 'Netherlands',
    timezone: TimeZone.CET
  },
  {
    code: 'GBASH',
    name: 'Ashford International',
    city: 'Ashford',
    country: 'United Kingdom',
    timezone: TimeZone.GMT
  },
  {
    code: 'BEBMK',
    name: 'Antwerp Central',
    city: 'Antwerp',
    country: 'Belgium',
    timezone: TimeZone.CET
  }
];

/**
 * Direct route connections (adjacency list)
 */
export const routes: Route[] = [
  // London <-> Paris
  { from: 'GBQQS', to: 'FRPNO', distance: 492 },
  { from: 'FRPNO', to: 'GBQQS', distance: 492 },

  // London <-> Brussels
  { from: 'GBQQS', to: 'BEMMB', distance: 373 },
  { from: 'BEMMB', to: 'GBQQS', distance: 373 },

  // London <-> Amsterdam
  { from: 'GBQQS', to: 'NLAMS', distance: 539 },
  { from: 'NLAMS', to: 'GBQQS', distance: 539 },

  // London <-> Ashford (domestic)
  { from: 'GBQQS', to: 'GBASH', distance: 88 },
  { from: 'GBASH', to: 'GBQQS', distance: 88 },

  // Paris <-> Brussels
  { from: 'FRPNO', to: 'BEMMB', distance: 314 },
  { from: 'BEMMB', to: 'FRPNO', distance: 314 },

  // Paris <-> Lyon
  { from: 'FRPNO', to: 'FRLPD', distance: 462 },
  { from: 'FRLPD', to: 'FRPNO', distance: 462 },

  // Paris <-> Marne-la-Vallée (Disneyland)
  { from: 'FRPNO', to: 'FRMLV', distance: 38 },
  { from: 'FRMLV', to: 'FRPNO', distance: 38 },

  // Lyon <-> Avignon
  { from: 'FRLPD', to: 'FRAVI', distance: 216 },
  { from: 'FRAVI', to: 'FRLPD', distance: 216 },

  // Lyon <-> Marseille
  { from: 'FRLPD', to: 'FRMSC', distance: 315 },
  { from: 'FRMSC', to: 'FRLPD', distance: 315 },

  // Avignon <-> Marseille
  { from: 'FRAVI', to: 'FRMSC', distance: 99 },
  { from: 'FRMSC', to: 'FRAVI', distance: 99 },

  // Brussels <-> Amsterdam
  { from: 'BEMMB', to: 'NLAMS', distance: 209 },
  { from: 'NLAMS', to: 'BEMMB', distance: 209 },

  // Brussels <-> Antwerp
  { from: 'BEMMB', to: 'BEBMK', distance: 52 },
  { from: 'BEBMK', to: 'BEMMB', distance: 52 },

  // Rotterdam <-> Amsterdam
  { from: 'NLRTD', to: 'NLAMS', distance: 78 },
  { from: 'NLAMS', to: 'NLRTD', distance: 78 },

  // London <-> Rotterdam
  { from: 'GBQQS', to: 'NLRTD', distance: 461 },
  { from: 'NLRTD', to: 'GBQQS', distance: 461 },

  // Antwerp <-> Amsterdam
  { from: 'BEBMK', to: 'NLAMS', distance: 157 },
  { from: 'NLAMS', to: 'BEBMK', distance: 157 }
];

/**
 * Scheduled journeys with departure/arrival times and seat availability
 */
export const journeys: Journey[] = [
  // London -> Paris routes
  {
    trainNumber: 'ES9002',
    from: 'GBQQS',
    to: 'FRPNO',
    departure: '06:01',
    arrival: '09:17',
    availableSeats: 22,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9004',
    from: 'GBQQS',
    to: 'FRPNO',
    departure: '07:01',
    arrival: '10:17',
    availableSeats: 15,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9006',
    from: 'GBQQS',
    to: 'FRPNO',
    departure: '08:31',
    arrival: '11:47',
    availableSeats: 8,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9012',
    from: 'GBQQS',
    to: 'FRPNO',
    departure: '10:24',
    arrival: '13:47',
    availableSeats: 28,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9020',
    from: 'GBQQS',
    to: 'FRPNO',
    departure: '15:31',
    arrival: '18:47',
    availableSeats: 12,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // Paris -> London routes
  {
    trainNumber: 'ES9003',
    from: 'FRPNO',
    to: 'GBQQS',
    departure: '07:13',
    arrival: '08:39',
    availableSeats: 18,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9009',
    from: 'FRPNO',
    to: 'GBQQS',
    departure: '10:13',
    arrival: '11:39',
    availableSeats: 25,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9015',
    from: 'FRPNO',
    to: 'GBQQS',
    departure: '13:13',
    arrival: '14:39',
    availableSeats: 10,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // London -> Brussels routes
  {
    trainNumber: 'ES9106',
    from: 'GBQQS',
    to: 'BEMMB',
    departure: '07:04',
    arrival: '10:05',
    availableSeats: 20,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9108',
    from: 'GBQQS',
    to: 'BEMMB',
    departure: '09:04',
    arrival: '12:05',
    availableSeats: 16,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },

  // Brussels -> London routes
  {
    trainNumber: 'ES9107',
    from: 'BEMMB',
    to: 'GBQQS',
    departure: '11:56',
    arrival: '12:57',
    availableSeats: 14,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9113',
    from: 'BEMMB',
    to: 'GBQQS',
    departure: '16:56',
    arrival: '17:57',
    availableSeats: 22,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // London -> Amsterdam routes
  {
    trainNumber: 'ES9110',
    from: 'GBQQS',
    to: 'NLAMS',
    departure: '08:31',
    arrival: '13:33',
    availableSeats: 30,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9114',
    from: 'GBQQS',
    to: 'NLAMS',
    departure: '11:31',
    arrival: '16:33',
    availableSeats: 18,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // Amsterdam -> London routes
  {
    trainNumber: 'ES9111',
    from: 'NLAMS',
    to: 'GBQQS',
    departure: '09:13',
    arrival: '12:30',
    availableSeats: 24,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9117',
    from: 'NLAMS',
    to: 'GBQQS',
    departure: '14:13',
    arrival: '17:30',
    availableSeats: 16,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },

  // Paris -> Lyon routes
  {
    trainNumber: 'ES9110',
    from: 'FRPNO',
    to: 'FRLPD',
    departure: '12:59',
    arrival: '14:15',
    availableSeats: 35,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9112',
    from: 'FRPNO',
    to: 'FRLPD',
    departure: '15:41',
    arrival: '17:42',
    availableSeats: 28,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // Lyon -> Paris routes
  {
    trainNumber: 'ES9111',
    from: 'FRLPD',
    to: 'FRPNO',
    departure: '08:00',
    arrival: '10:01',
    availableSeats: 32,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9115',
    from: 'FRLPD',
    to: 'FRPNO',
    departure: '16:45',
    arrival: '18:46',
    availableSeats: 20,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },

  // Lyon -> Marseille routes
  {
    trainNumber: 'ES9150',
    from: 'FRLPD',
    to: 'FRMSC',
    departure: '14:30',
    arrival: '16:12',
    availableSeats: 26,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9152',
    from: 'FRLPD',
    to: 'FRMSC',
    departure: '17:15',
    arrival: '18:57',
    availableSeats: 18,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // Marseille -> Lyon routes
  {
    trainNumber: 'ES9151',
    from: 'FRMSC',
    to: 'FRLPD',
    departure: '07:30',
    arrival: '09:12',
    availableSeats: 22,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9154',
    from: 'FRMSC',
    to: 'FRLPD',
    departure: '15:48',
    arrival: '17:30',
    availableSeats: 12,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },

  // Brussels -> Amsterdam routes
  {
    trainNumber: 'ES9130',
    from: 'BEMMB',
    to: 'NLAMS',
    departure: '08:25',
    arrival: '10:51',
    availableSeats: 40,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9132',
    from: 'BEMMB',
    to: 'NLAMS',
    departure: '13:25',
    arrival: '15:51',
    availableSeats: 35,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // Amsterdam -> Brussels routes
  {
    trainNumber: 'ES9131',
    from: 'NLAMS',
    to: 'BEMMB',
    departure: '11:47',
    arrival: '14:13',
    availableSeats: 38,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9135',
    from: 'NLAMS',
    to: 'BEMMB',
    departure: '16:47',
    arrival: '19:13',
    availableSeats: 30,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },

  // Rotterdam -> Amsterdam routes
  {
    trainNumber: 'ES9140',
    from: 'NLRTD',
    to: 'NLAMS',
    departure: '09:15',
    arrival: '10:00',
    availableSeats: 45,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  },
  {
    trainNumber: 'ES9142',
    from: 'NLRTD',
    to: 'NLAMS',
    departure: '14:15',
    arrival: '15:00',
    availableSeats: 42,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },

  // Amsterdam -> Rotterdam routes
  {
    trainNumber: 'ES9141',
    from: 'NLAMS',
    to: 'NLRTD',
    departure: '10:30',
    arrival: '11:15',
    availableSeats: 40,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday]
  },
  {
    trainNumber: 'ES9145',
    from: 'NLAMS',
    to: 'NLRTD',
    departure: '15:30',
    arrival: '16:15',
    availableSeats: 38,
    days: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday]
  }
];

/**
 * Complete Eurostar dataset
 */
export const eurostarData: EurostarData = {
  stations,
  routes,
  journeys
};

/**
 * Helper function to get station by code
 */
export function getStationByCode(code: string): Station | undefined {
  return stations.find(s => s.code === code);
}

/**
 * Helper function to get station name by code
 */
export function getStationName(code: string): string {
  const station = getStationByCode(code);
  return station ? station.name : code;
}
