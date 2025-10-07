type Direction = 'N' | 'W' | 'S' | 'E';
type Obstacle = { x: number; y: number };

export class MarsRover {
  private static readonly LEFT_DIRECTIONS: Direction[] = ['N', 'W', 'S', 'E'];
  private static readonly RIGHT_DIRECTIONS: Direction[] = ['N', 'E', 'S', 'W'];

  x: number;
  y: number;
  direction: Direction;
  plateauSize: number;
  obstacles: Obstacle[];
  batteryLevel: number;
  obstaclesEncountered: Obstacle[];
  movesBlocked: number;

  constructor(
    x: number,
    y: number,
    direction: Direction,
    plateauSize: number,
    obstacles: Obstacle[] = [],
    batteryLevel: number = 100
  ) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.plateauSize = plateauSize;
    this.obstacles = obstacles;
    this.batteryLevel = batteryLevel;
    this.obstaclesEncountered = [];
    this.movesBlocked = 0;
  }

  execute(): string {
    return `${this.x}, ${this.y}, ${this.direction}`;
  }

  getStatus(): string {
    return `Position: (${this.x}, ${this.y}) Direction: ${this.direction} Battery: ${this.batteryLevel}% Blocked: ${this.movesBlocked}`;
  }

  hasPower(): boolean {
    return this.batteryLevel > 0;
  }

  consumePower(amount: number = 1): boolean {
    if (this.batteryLevel <= 0) {
      return false;
    }
    this.batteryLevel = Math.max(0, this.batteryLevel - amount);
    return this.batteryLevel > 0;
  }

  turnLeft(): void {
    if (!this.hasPower()) return;

    const currentPosition = MarsRover.LEFT_DIRECTIONS.indexOf(this.direction);
    this.direction = MarsRover.LEFT_DIRECTIONS[(currentPosition + 1) % 4];
    this.consumePower(1);
  }

  turnRight(): void {
    if (!this.hasPower()) return;

    const currentPosition = MarsRover.RIGHT_DIRECTIONS.indexOf(this.direction);
    this.direction = MarsRover.RIGHT_DIRECTIONS[(currentPosition + 1) % 4];
    this.consumePower(1);
  }

  setCommands(commands: string): void {
    for (let command of commands.split('')) {
      // Stop processing if battery is dead
      if (!this.hasPower()) {
        break;
      }

      switch (command) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'M':
          this.move();
          break;
        default:
          // Ignore invalid commands
          break;
      }
    }
  }

  move(): void {
    // Check if rover has power to move
    if (!this.hasPower()) {
      return;
    }

    let newX = this.x;
    let newY = this.y;

    // Calculate new position based on current direction
    switch (this.direction) {
      case 'N':
        newY += 1;
        break;
      case 'E':
        newX += 1;
        break;
      case 'S':
        newY -= 1;
        break;
      case 'W':
        newX -= 1;
        break;
    }

    // Check if within plateau boundaries
    if (newX < 0 || newX > this.plateauSize || newY < 0 || newY > this.plateauSize) {
      this.movesBlocked++;
      return;
    }

    // Check if position has an obstacle
    if (this.hasObstacle(newX, newY)) {
      this.movesBlocked++;
      const obstacle = { x: newX, y: newY };

      // Track obstacle encounter (avoid duplicates)
      if (!this.obstaclesEncountered.some(obs => obs.x === obstacle.x && obs.y === obstacle.y)) {
        this.obstaclesEncountered.push(obstacle);
      }
      return;
    }

    // Move to new position and consume power
    this.x = newX;
    this.y = newY;
    this.consumePower(2); // Moving costs more power than turning
  }

  private hasObstacle(x: number, y: number): boolean {
    return this.obstacles.some(obstacle => obstacle.x === x && obstacle.y === y);
  }

  // Helper method to check if rover is stuck
  isStuck(): boolean {
    // Check all 4 directions to see if rover can move anywhere
    const directions: Direction[] = ['N', 'E', 'S', 'W'];
    let blockedCount = 0;

    for (const dir of directions) {
      let testX = this.x;
      let testY = this.y;

      switch (dir) {
        case 'N':
          testY += 1;
          break;
        case 'E':
          testX += 1;
          break;
        case 'S':
          testY -= 1;
          break;
        case 'W':
          testX -= 1;
          break;
      }

      // Check if this direction is blocked
      if (
        testX < 0 ||
        testX > this.plateauSize ||
        testY < 0 ||
        testY > this.plateauSize ||
        this.hasObstacle(testX, testY)
      ) {
        blockedCount++;
      }
    }

    return blockedCount === 4;
  }

  // Get list of valid moves from current position
  getValidMoves(): Direction[] {
    const validMoves: Direction[] = [];
    const directions: Direction[] = ['N', 'E', 'S', 'W'];

    for (const dir of directions) {
      let testX = this.x;
      let testY = this.y;

      switch (dir) {
        case 'N':
          testY += 1;
          break;
        case 'E':
          testX += 1;
          break;
        case 'S':
          testY -= 1;
          break;
        case 'W':
          testX -= 1;
          break;
      }

      // Check if this direction is valid
      if (
        testX >= 0 &&
        testX <= this.plateauSize &&
        testY >= 0 &&
        testY <= this.plateauSize &&
        !this.hasObstacle(testX, testY)
      ) {
        validMoves.push(dir);
      }
    }

    return validMoves;
  }
}
