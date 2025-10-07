// Jest tests for TypeScript solution
import { MarsRover } from './solution';

describe('MarsRover', () => {
  let marsRover: MarsRover;

  // Direction compass:
  //     N
  //  W     E
  //     S

  beforeEach(() => {
    marsRover = new MarsRover(2, 2, 'N', 5);
  });

  describe('execute', () => {
    it('should return current position and direction', () => {
      expect(marsRover.execute()).toBe('2, 2, N');
    });
  });

  describe('turnLeft', () => {
    it('should turn from North to West', () => {
      marsRover.turnLeft();
      expect(marsRover.execute()).toBe('2, 2, W');
    });

    it('should turn from West to South', () => {
      marsRover.turnLeft();
      marsRover.turnLeft();
      expect(marsRover.execute()).toBe('2, 2, S');
    });

    it('should return to original direction after 4 left turns', () => {
      marsRover.turnLeft();
      marsRover.turnLeft();
      marsRover.turnLeft();
      marsRover.turnLeft();
      expect(marsRover.execute()).toBe('2, 2, N');
    });
  });

  describe('turnRight', () => {
    it('should turn from North to East', () => {
      marsRover.turnRight();
      expect(marsRover.execute()).toBe('2, 2, E');
    });

    it('should turn from East to South', () => {
      marsRover.turnRight();
      marsRover.turnRight();
      expect(marsRover.execute()).toBe('2, 2, S');
    });

    it('should return to original direction after 4 right turns', () => {
      marsRover.turnRight();
      marsRover.turnRight();
      marsRover.turnRight();
      marsRover.turnRight();
      expect(marsRover.execute()).toBe('2, 2, N');
    });
  });

  describe('move', () => {
    it('should move north (increase y by 1)', () => {
      marsRover.move();
      expect(marsRover.execute()).toBe('2, 3, N');
    });

    it('should move east (increase x by 1)', () => {
      marsRover.turnRight();
      marsRover.move();
      expect(marsRover.execute()).toBe('3, 2, E');
    });

    it('should move south (decrease y by 1)', () => {
      marsRover.turnRight();
      marsRover.turnRight();
      marsRover.move();
      expect(marsRover.execute()).toBe('2, 1, S');
    });

    it('should move west (decrease x by 1)', () => {
      marsRover.turnLeft();
      marsRover.move();
      expect(marsRover.execute()).toBe('1, 2, W');
    });
  });

  describe('setCommands', () => {
    it('should execute "LMLMLMLMM" and end at (2, 3, N)', () => {
      marsRover.setCommands('LMLMLMLMM');
      expect(marsRover.execute()).toBe('2, 3, N');
    });

    it('should execute "MMRMMRMRRM" and end at (4, 4, N)', () => {
      marsRover.setCommands('MMRMMRMRRM');
      expect(marsRover.execute()).toBe('4, 4, N');
    });

    it('should handle empty command string', () => {
      marsRover.setCommands('');
      expect(marsRover.execute()).toBe('2, 2, N');
    });

    it('should execute complex command sequence "MMLMRM"', () => {
      marsRover.setCommands('MMLMRM');
      expect(marsRover.execute()).toBe('1, 5, N');
    });

    it('should ignore invalid commands', () => {
      marsRover.setCommands('LMXMYZ');
      expect(marsRover.execute()).toBe('0, 2, W');
    });
  });

  describe('boundary validation', () => {
    it('should not move beyond north boundary', () => {
      const rover = new MarsRover(2, 5, 'N', 5);
      rover.move();
      expect(rover.execute()).toBe('2, 5, N');
    });

    it('should not move beyond east boundary', () => {
      const rover = new MarsRover(5, 2, 'E', 5);
      rover.move();
      expect(rover.execute()).toBe('5, 2, E');
    });

    it('should not move beyond south boundary', () => {
      const rover = new MarsRover(2, 0, 'S', 5);
      rover.move();
      expect(rover.execute()).toBe('2, 0, S');
    });

    it('should not move beyond west boundary', () => {
      const rover = new MarsRover(0, 2, 'W', 5);
      rover.move();
      expect(rover.execute()).toBe('0, 2, W');
    });

    it('should move within boundaries', () => {
      const rover = new MarsRover(2, 2, 'N', 5);
      rover.move();
      expect(rover.execute()).toBe('2, 3, N');
    });
  });

  describe('edge cases', () => {
    it('should handle rover starting at different position', () => {
      const rover = new MarsRover(0, 0, 'E', 5);
      rover.move();
      expect(rover.execute()).toBe('1, 0, E');
    });

    it('should handle rover starting facing South', () => {
      const rover = new MarsRover(3, 3, 'S', 5);
      rover.move();
      expect(rover.execute()).toBe('3, 2, S');
    });

    it('should handle multiple moves stopping at boundary', () => {
      marsRover.setCommands('MMMM');
      expect(marsRover.execute()).toBe('2, 5, N');
    });

    it('should handle commands that hit boundary mid-sequence', () => {
      const rover = new MarsRover(4, 4, 'N', 5);
      rover.setCommands('MMRMM');
      expect(rover.execute()).toBe('5, 5, E');
    });
  });

  describe('obstacle detection', () => {
    it('should stop before hitting an obstacle directly ahead', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [{ x: 2, y: 3 }]);
      rover.move();
      expect(rover.execute()).toBe('2, 2, N');
    });

    it('should stop when obstacle is to the east', () => {
      const rover = new MarsRover(2, 2, 'E', 5, [{ x: 3, y: 2 }]);
      rover.move();
      expect(rover.execute()).toBe('2, 2, E');
    });

    it('should stop when obstacle is to the south', () => {
      const rover = new MarsRover(2, 2, 'S', 5, [{ x: 2, y: 1 }]);
      rover.move();
      expect(rover.execute()).toBe('2, 2, S');
    });

    it('should stop when obstacle is to the west', () => {
      const rover = new MarsRover(2, 2, 'W', 5, [{ x: 1, y: 2 }]);
      rover.move();
      expect(rover.execute()).toBe('2, 2, W');
    });

    it('should move freely when no obstacles in path', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [{ x: 4, y: 4 }]);
      rover.move();
      expect(rover.execute()).toBe('2, 3, N');
    });

    it('should handle multiple obstacles on the plateau', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 1, y: 2 }
      ]);
      rover.move();
      expect(rover.execute()).toBe('2, 2, N');
    });

    it('should navigate around obstacles with commands', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [{ x: 2, y: 3 }]);
      rover.setCommands('MRMLM');
      expect(rover.execute()).toBe('3, 3, N');
    });

    it('should stop at first obstacle in command sequence', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [{ x: 2, y: 4 }]);
      rover.setCommands('MMMM');
      expect(rover.execute()).toBe('2, 3, N');
    });

    it('should handle obstacle at starting position boundary', () => {
      const rover = new MarsRover(0, 0, 'E', 5, [{ x: 1, y: 0 }]);
      rover.move();
      expect(rover.execute()).toBe('0, 0, E');
    });

    it('should complete complex path avoiding obstacles', () => {
      const rover = new MarsRover(1, 1, 'N', 5, [
        { x: 1, y: 2 },
        { x: 3, y: 2 }
      ]);
      // R: turn right to E
      // M: move to (2,1)
      // M: move to (3,1)
      // L: turn left to N
      // M: can't move to (3,2) - obstacle, stay at (3,1)
      // L: turn left to W
      // M: move to (2,1)
      rover.setCommands('RMMLMLM');
      expect(rover.execute()).toBe('2, 1, W');
    });

    it('should track obstacles encountered', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [{ x: 2, y: 3 }]);
      rover.move();
      expect(rover.obstaclesEncountered).toHaveLength(1);
      expect(rover.obstaclesEncountered[0]).toEqual({ x: 2, y: 3 });
    });

    it('should count blocked moves', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [{ x: 2, y: 3 }]);
      rover.move();
      rover.move();
      expect(rover.movesBlocked).toBe(2);
    });
  });

  describe('battery management', () => {
    it('should start with full battery by default', () => {
      const rover = new MarsRover(2, 2, 'N', 5);
      expect(rover.hasPower()).toBe(true);
      expect(rover.batteryLevel).toBe(100);
    });

    it('should consume power when turning left', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 10);
      rover.turnLeft();
      expect(rover.batteryLevel).toBe(9);
    });

    it('should consume power when turning right', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 10);
      rover.turnRight();
      expect(rover.batteryLevel).toBe(9);
    });

    it('should consume more power when moving', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 10);
      rover.move();
      expect(rover.batteryLevel).toBe(8); // Moving costs 2 power
    });

    it('should stop executing commands when battery dies', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 6);
      rover.setCommands('MMMMMM'); // Try to move 6 times
      // 6 power: M(4), M(2), M(0)
      expect(rover.batteryLevel).toBe(0);
      expect(rover.execute()).toBe('2, 5, N'); // Moved three times
    });

    it('should not move when battery is dead', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 0);
      rover.move();
      expect(rover.execute()).toBe('2, 2, N');
    });

    it('should not turn when battery is dead', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 0);
      rover.turnLeft();
      expect(rover.execute()).toBe('2, 2, N');
    });

    it('should handle complex command sequence with limited battery', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [], 8);
      rover.setCommands('RMMLM'); // R(7), M(5), M(3), L(2), M(0)
      expect(rover.batteryLevel).toBe(0);
      expect(rover.execute()).toBe('4, 3, N');
    });
  });

  describe('rover status and diagnostics', () => {
    it('should report detailed status', () => {
      const rover = new MarsRover(2, 3, 'E', 5, [], 50);
      const status = rover.getStatus();
      expect(status).toContain('Position: (2, 3)');
      expect(status).toContain('Direction: E');
      expect(status).toContain('Battery: 50%');
    });

    it('should detect when rover is stuck (surrounded by obstacles)', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [
        { x: 2, y: 3 }, // North
        { x: 3, y: 2 }, // East
        { x: 2, y: 1 }, // South
        { x: 1, y: 2 }  // West
      ]);
      expect(rover.isStuck()).toBe(true);
    });

    it('should detect when rover is not stuck', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [
        { x: 2, y: 3 }, // North blocked
        { x: 3, y: 2 }  // East blocked
      ]);
      expect(rover.isStuck()).toBe(false); // Can still go South or West
    });

    it('should detect when rover is stuck at corner', () => {
      const rover = new MarsRover(0, 0, 'S', 5, [
        { x: 1, y: 0 }, // East blocked
        { x: 0, y: 1 }  // North blocked
      ]);
      expect(rover.isStuck()).toBe(true);
    });

    it('should return valid moves from current position', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [
        { x: 2, y: 3 } // North blocked
      ]);
      const validMoves = rover.getValidMoves();
      expect(validMoves).toHaveLength(3);
      expect(validMoves).toContain('E');
      expect(validMoves).toContain('S');
      expect(validMoves).toContain('W');
      expect(validMoves).not.toContain('N');
    });

    it('should return empty array when rover is completely stuck', () => {
      const rover = new MarsRover(2, 2, 'N', 5, [
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 2, y: 1 },
        { x: 1, y: 2 }
      ]);
      const validMoves = rover.getValidMoves();
      expect(validMoves).toHaveLength(0);
    });
  });

  describe('edge cases and problem decomposition', () => {
    it('should handle rover starting with low battery and obstacles', () => {
      const rover = new MarsRover(1, 1, 'N', 5, [{ x: 1, y: 2 }], 3);
      rover.setCommands('MRMM');
      // M: blocked by obstacle, battery 3
      // R: turn right to E, battery 2
      // M: move to (2,1), battery 0
      // M: no power, can't move
      expect(rover.execute()).toBe('2, 1, E');
      expect(rover.batteryLevel).toBe(0);
    });

    it('should handle maze-like scenario', () => {
      const rover = new MarsRover(0, 0, 'N', 3, [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 0 }
      ]);
      // R: turn to E
      // M: move to (1,0)
      // M: blocked by obstacle at (2,0)
      // L: turn to N
      // M: blocked by obstacle at (1,1)
      // M: blocked by obstacle at (1,1)
      rover.setCommands('RMMLMM');
      expect(rover.execute()).toBe('1, 0, N');
    });

    it('should handle confusing variable scenario (testing clear thinking)', () => {
      // This tests if you can keep track despite potential confusion
      const currentX = 1;
      const currentY = 1;
      const facing = 'E';
      const gridSize = 5;
      const blockers = [{ x: 2, y: 1 }];

      const rover = new MarsRover(currentX, currentY, facing, gridSize, blockers);
      rover.setCommands('MLMRM');
      // M: blocked by obstacle at (2,1)
      // L: turn to N
      // M: move to (1,2)
      // R: turn to E
      // M: move to (2,2)
      expect(rover.execute()).toBe('2, 2, E');
    });

    it('should handle empty plateau (rover at origin)', () => {
      const rover = new MarsRover(0, 0, 'N', 0);
      rover.move();
      expect(rover.execute()).toBe('0, 0, N'); // Can't move, at boundary
      expect(rover.isStuck()).toBe(true);
    });
  });
});
