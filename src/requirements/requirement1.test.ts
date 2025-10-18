/**
 * Requirement 1: Basic Route Display
 * Tests for displaying all direct train connections
 */

import { displayDirectRoutes } from './requirement1';
import { routes, getStationName } from '../data/eurostarRoutes';

describe('Requirement 1: Basic Route Display', () => {
  describe('displayDirectRoutes', () => {
    it('should return formatted array of all direct routes', () => {
      // TODO: Write test - this is your starting point!
      // Expected format: "Origin → Destination"
      // Example: "London St Pancras International → Paris Gare du Nord"
    });

    it('should handle empty dataset', () => {
      // TODO: Test with empty routes array
    });

    it('should format route correctly with arrow symbol', () => {
      // TODO: Test that output contains " → " separator
    });

    it('should return all routes from the dataset', () => {
      // TODO: Test that number of results matches input routes
    });
  });
});
