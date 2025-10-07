# Mars Rover Kata Challenge

The Mars Rover kata is a classic programming exercise. Here are the requirements:

## Problem Description

You're part of a team that explores Mars by sending remotely controlled vehicles to the surface of the planet. You need to develop an API that translates commands sent from Earth to instructions understood by the rover.

## Requirements

### The Grid
- Mars is represented as a plateau with a rectangular grid
- The plateau is divided into a grid to simplify navigation
- Example: A plateau size of 5x5 means coordinates range from (0,0) to (5,5)

### The Rover
- A rover has:
  - **Position**: x and y coordinates on the grid
  - **Direction**: One of four cardinal directions (N, S, E, W)

### Initial State
- The rover is initialized with:
  - Starting position (x, y)
  - Starting direction (N, S, E, W)

### Commands
The rover receives a string of commands:
- **L**: Turn left 90 degrees (doesn't move, just rotates)
- **R**: Turn right 90 degrees (doesn't move, just rotates)
- **M**: Move forward one grid point in the current direction

### Behavior
- The rover should maintain its current position and direction
- Process each command sequentially
- Return the final position and direction after all commands are executed

## Example

**Input:**
- Plateau: 5x5
- Starting Position: (1, 2, N) - at coordinates (1,2) facing North
- Commands: "LMLMLMLMM"

**Output:**
- Final Position: (1, 3, N)

**Explanation:**
- L: Turn left, now facing W
- M: Move to (0, 2, W)
- L: Turn left, now facing S
- M: Move to (0, 1, S)
- L: Turn left, now facing E
- M: Move to (1, 1, E)
- L: Turn left, now facing N
- M: Move to (1, 2, N)
- M: Move to (1, 3, N)

## Bonus Challenges (Optional)
- Handle multiple rovers on the same plateau
- Add obstacle detection (rover stops before hitting obstacles)
- Implement wrapping (rover wraps around edges of the plateau)
- Add backward movement command (B)

Would you like me to help you get started with the implementation?