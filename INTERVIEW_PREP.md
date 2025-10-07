# Mars Rover Interview Preparation Guide

## Problem Decomposition Strategy

### Core Principle: Break Down Complex Problems into Small, Testable Steps

When given a robot/rover problem, follow this mental framework:

## 1. Understanding the Problem (First 2-3 minutes)

Ask clarifying questions:
- **Inputs**: What commands does the robot receive? (L, R, M)
- **State**: What does the robot need to track? (position, direction)
- **Constraints**: What are the boundaries? What can stop the robot?
- **Outputs**: What should the robot return? (position, status, errors)

## 2. Core Components (Break it down)

### A. State Management
```typescript
// What does the robot KNOW?
- Current position (x, y)
- Current direction (N, S, E, W)
- Environment constraints (plateau size)
- Status (battery, obstacles encountered)
```

### B. Basic Actions (Atomic Operations)
```typescript
// What can the robot DO?
1. turnLeft() - Change direction, no movement
2. turnRight() - Change direction, no movement
3. move() - Change position based on direction
4. execute() - Report current state
```

### C. Command Processing
```typescript
// How does the robot PROCESS instructions?
- Parse command string character by character
- Map each character to an action
- Handle invalid commands gracefully
```

## 3. Edge Cases (Show You Think About Problems)

### Boundary Conditions
- ✅ Robot at edge of grid
- ✅ Robot tries to move off grid
- ✅ Empty grid (0x0)
- ✅ Robot at corner

### Obstacles
- ✅ Obstacle directly ahead
- ✅ Multiple obstacles
- ✅ Robot completely surrounded
- ✅ Path navigation around obstacles

### Resource Constraints
- ✅ Battery runs out mid-command
- ✅ No power to execute commands
- ✅ Different power costs for actions

### Error Handling
- ✅ Invalid commands (ignore them)
- ✅ Confusing variable names (rename for clarity)
- ✅ Robot stuck detection

## 4. How to Communicate Your Thinking

### Good Approach:
```typescript
// "Let me break this down step by step..."

// Step 1: Check preconditions
if (!this.hasPower()) {
  return; // Can't move without power
}

// Step 2: Calculate new position
let newX = this.x;
let newY = this.y;

// Step 3: Update based on direction
switch (this.direction) {
  case 'N': newY += 1; break;
  // ... etc
}

// Step 4: Validate move
if (this.isOutOfBounds(newX, newY)) {
  return; // Don't move
}

// Step 5: Execute move
this.x = newX;
this.y = newY;
this.consumePower(2);
```

### Bad Approach:
```typescript
// Jumping straight to solution without explanation
move() {
  this.x++;
  this.y++;
}
```

## 5. Interview Tips

### When Given Confusing Code
**Interviewer might give you:**
```typescript
let a = 2;
let b = 3;
let c = 'N';
```

**Your response:**
```typescript
// "Let me rename these for clarity..."
let roverX = 2;
let roverY = 3;
let roverDirection = 'N';
```

### When Asked "What if...?"
This is testing your edge case thinking!

**Interviewer:** "What if the robot runs out of power?"
**You:** "Good question! I should:
1. Track battery level
2. Check before each action
3. Stop processing commands when battery hits zero
4. Maybe return a status indicating why we stopped"

**Interviewer:** "What if the robot is surrounded by obstacles?"
**You:** "I can create a helper method to check all 4 directions and determine if the robot is stuck. This helps with diagnostics."

## 6. Key Methods to Demonstrate

### Diagnostic Methods (Shows Advanced Thinking)
```typescript
// Check if robot can move at all
isStuck(): boolean

// Get list of valid moves
getValidMoves(): Direction[]

// Report detailed status
getStatus(): string

// Track what went wrong
movesBlocked: number
obstaclesEncountered: Obstacle[]
```

## 7. Testing Strategy (If Asked to Test)

### Progressive Testing:
1. **Basic functionality** - Can it turn? Can it move?
2. **Single edge case** - What happens at boundary?
3. **Combined scenarios** - Battery + obstacles + boundaries
4. **Real-world scenarios** - Navigate a maze

## 8. Common Interviewer Tricks

### Trick 1: Deliberately Confusing Names
```typescript
// They give you:
let x = 5; // Actually the grid size
let y = 2; // Actually the x position
let z = 3; // Actually the y position

// You say: "Let me clarify these variable names..."
let gridSize = 5;
let roverX = 2;
let roverY = 3;
```

### Trick 2: "Can you extend this?"
They're testing:
- Can you modify existing code?
- Do you break existing functionality?
- Do you think about backwards compatibility?

**Your approach:**
```typescript
// "I'll add an optional parameter to maintain backwards compatibility"
constructor(
  x: number,
  y: number,
  direction: Direction,
  plateauSize: number,
  obstacles: Obstacle[] = [], // Optional, defaults to empty
  batteryLevel: number = 100  // Optional, defaults to full
)
```

### Trick 3: "Walk me through this command sequence"
```typescript
// Given: Robot at (2,2) facing N, obstacle at (2,3)
// Command: "MRMM"

// Your response (step by step):
"Starting position: (2, 2, N)

M - Try to move north to (2,3)
    - Obstacle detected at (2,3)
    - Stay at (2,2,N)
    - Log blocked move

R - Turn right
    - Now facing East
    - Position: (2,2,E)

M - Move east to (3,2)
    - No obstacles
    - Position: (3,2,E)

M - Move east to (4,2)
    - No obstacles
    - Final position: (4,2,E)"
```

## 9. What Interviewers Are Really Looking For

1. **Problem Decomposition** - Can you break big problems into small steps?
2. **Edge Case Thinking** - Do you consider what can go wrong?
3. **Clear Communication** - Can you explain your logic?
4. **Code Organization** - Is your code readable and maintainable?
5. **Adaptability** - Can you extend functionality without breaking things?

## 10. Practice Commands

### Simple Navigation
```
Input: LMLMLMLMM
Expected: Navigate in a square pattern

Input: MMRMMRMRRM
Expected: Navigate forward and turn
```

### With Obstacles
```
Obstacles at: [(2,3), (3,2)]
Input: MRMMLM
Expected: Navigate around obstacles
```

### Low Battery
```
Battery: 8
Input: RMMLM
Expected: Stop when battery runs out
```

## Remember: It's Not About Perfect Code

The interviewer wants to see:
- How you think
- How you handle ambiguity
- How you recover from mistakes
- How you communicate

**Don't be afraid to say:**
- "Let me think through this step by step..."
- "I'm going to rename these variables for clarity..."
- "What if we encounter this edge case?"
- "Let me test this with a simple example first..."

Good luck! 🚀
