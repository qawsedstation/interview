# Eurostar Technical Interview - Requirements

## Overview
You will be working with a dataset of Eurostar train routes and destinations. Your task is to manipulate this dataset and render it, with a strong focus on **Test-Driven Development (TDD)**.

## Initial Data Structure
The data is provided in `/src/data/eurostarRoutes.ts` with the following structure:
- **Stations**: List of Eurostar stations with their details
- **Routes**: Adjacency structure representing train connections between stations
- **Journeys**: Scheduled train services with departure/arrival times

---

## Requirement 1: Basic Route Display
**Difficulty**: ⭐ Easy

### Description
Parse the train routes dataset and display all direct connections in the format:
```
Origin → Destination
```

### Acceptance Criteria
- [ ] Display all direct train connections
- [ ] Format output as "Origin → Destination" (e.g., "London St Pancras → Paris Gare du Nord")
- [ ] Log output to console clearly
- [ ] Write tests FIRST before implementing

### Example Output
```
London St Pancras → Paris Gare du Nord
London St Pancras → Brussels Midi
Paris Gare du Nord → London St Pancras
Brussels Midi → Amsterdam Centraal
...
```

### Test Cases to Consider
- Empty dataset should return empty array
- Single route should be formatted correctly
- Multiple routes from same origin should all be displayed
- Route order should be consistent

---

## Requirement 2: Find All Routes Between Two Stations
**Difficulty**: ⭐⭐ Medium

### Description
Given an origin and destination station, find and display all possible routes (including routes with connections) between them.

### Acceptance Criteria
- [ ] Accept origin and destination as parameters
- [ ] Find all possible paths (direct and with connections)
- [ ] Display routes showing all intermediate stations
- [ ] Limit search to maximum 2 connections (to avoid infinite loops)
- [ ] Write comprehensive tests covering edge cases

### Example Output
For `findRoutes("London St Pancras", "Amsterdam Centraal")`:
```
Route 1 (Direct): London St Pancras → Amsterdam Centraal
Route 2 (1 connection): London St Pancras → Brussels Midi → Amsterdam Centraal
Route 3 (1 connection): London St Pancras → Rotterdam Centraal → Amsterdam Centraal
```

### Test Cases to Consider
- No route exists between stations
- Direct route exists
- Multiple routes with different connection counts
- Circular routes (should be handled)
- Same origin and destination
- Invalid station names

---

## Requirement 3: Calculate Journey Duration
**Difficulty**: ⭐⭐⭐ Medium-Hard

### Description
Using the journey data (departure/arrival times), calculate the total duration for a given route, including layover time for connections.

### Acceptance Criteria
- [ ] Calculate travel time for direct routes
- [ ] Calculate total journey time including layovers for routes with connections
- [ ] Handle different time zones (London: GMT, Paris/Brussels/Amsterdam: CET)
- [ ] Format duration in hours and minutes
- [ ] Consider minimum connection time (30 minutes) for validity

### Example Output
```
Route: London St Pancras → Paris Gare du Nord → Lyon Part-Dieu
Departure: 08:31 (London)
Arrival: 14:15 (Lyon)
Total Duration: 5h 44m
  - London → Paris: 2h 17m
  - Layover in Paris: 1h 12m
  - Paris → Lyon: 2h 15m
```

### Test Cases to Consider
- Direct journey calculation
- Journey with one connection
- Journey with multiple connections
- Invalid connection (layover too short)
- Timezone conversion
- Journey spanning midnight

---

## Requirement 4: Find Fastest Route
**Difficulty**: ⭐⭐⭐⭐ Hard

### Description
Given an origin, destination, and departure time, find the fastest route option. Consider all available trains and connections.

### Acceptance Criteria
- [ ] Accept origin, destination, and desired departure time
- [ ] Search all possible routes with available trains
- [ ] Consider actual departure/arrival times from schedule
- [ ] Ensure connections have minimum 30-minute layover
- [ ] Return route with shortest total journey time
- [ ] Handle case where no valid route exists for given time

### Example Output
```typescript
findFastestRoute({
  origin: "London St Pancras",
  destination: "Lyon Part-Dieu",
  departureAfter: "2025-10-20T08:00:00"
})

// Output:
{
  totalDuration: "5h 44m",
  departureTime: "08:31",
  arrivalTime: "14:15",
  legs: [
    {
      from: "London St Pancras",
      to: "Paris Gare du Nord",
      departure: "08:31",
      arrival: "11:47",
      trainNumber: "ES9004"
    },
    {
      from: "Paris Gare du Nord",
      to: "Lyon Part-Dieu",
      departure: "12:59",
      arrival: "14:15",
      trainNumber: "ES9110"
    }
  ]
}
```

### Test Cases to Consider
- Direct route is fastest
- Route with connection is faster than waiting for direct train
- No available trains after requested time
- Multiple routes with same duration
- Edge cases with timezone boundaries

---

## Requirement 5: Multi-Passenger Seat Availability
**Difficulty**: ⭐⭐⭐⭐⭐ Very Hard

### Description
Extend Requirement 4 to handle multiple passengers and seat availability. Some trains may not have enough available seats, requiring alternative routing.

### Acceptance Criteria
- [ ] Accept number of passengers as parameter
- [ ] Check seat availability on each leg of journey
- [ ] If insufficient seats, find alternative routes
- [ ] Optimize for fastest route with available capacity
- [ ] Handle cases where no route has capacity for all passengers
- [ ] Suggest splitting passengers across different trains if beneficial

### Example Output
```typescript
findFastestRouteWithAvailability({
  origin: "London St Pancras",
  destination: "Marseille",
  departureAfter: "2025-10-20T10:00:00",
  passengers: 8
})

// Output:
{
  totalDuration: "7h 22m",
  seatsAvailable: true,
  legs: [
    {
      from: "London St Pancras",
      to: "Paris Gare du Nord",
      trainNumber: "ES9012",
      availableSeats: 12,
      seatsNeeded: 8
    },
    {
      from: "Paris Gare du Nord",
      to: "Marseille",
      trainNumber: "ES9154",
      availableSeats: 9,
      seatsNeeded: 8
    }
  ],
  alternatives: [
    {
      reason: "Earlier arrival but via Lyon",
      totalDuration: "7h 45m"
      // ... route details
    }
  ]
}
```

### Test Cases to Consider
- Sufficient capacity on all legs
- Insufficient capacity on one leg
- Insufficient capacity on multiple legs
- No route has sufficient capacity
- Edge case: 0 passengers, negative passengers
- Alternative routes with different capacity/timing trade-offs

---

## General TDD Guidelines

### Test Structure
```typescript
describe('Feature Name', () => {
  describe('Scenario', () => {
    it('should handle specific case', () => {
      // Arrange
      const input = ...;
      const expected = ...;

      // Act
      const result = functionName(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
```

### TDD Workflow
1. **RED**: Write a failing test first
2. **GREEN**: Write minimal code to make it pass
3. **REFACTOR**: Improve code while keeping tests green

### Focus Areas
- **Edge cases**: Empty inputs, invalid data, boundary conditions
- **Type safety**: Leverage TypeScript for compile-time safety
- **Readability**: Clear test descriptions, well-named variables
- **Maintainability**: DRY tests, shared setup/teardown

---

## Getting Started

1. Review the data structure in `/src/data/eurostarRoutes.ts`
2. Start with **Requirement 1**
3. Write your tests first in `/src/requirements/requirement1.test.ts`
4. Implement functionality in `/src/requirements/requirement1.ts`
5. Run tests: `npm test`

Good luck! Remember: **Tests first, code second.**
