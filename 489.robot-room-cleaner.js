/*
 * @lc app=leetcode id=489 lang=javascript
 *
 * [489] Robot Room Cleaner
 */

// @google
// #backtracking
// #google-interview

// @lc code=start
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let visited = new Set();

  function goBack() {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }

  function backtracking(row, col, d) {
    visited.add([row, col].join());
    robot.clean();

    for (let i = 0; i < 4; i++) {
      let newD = (d + i) % 4; 
      let newRow = row + dirs[newD][0];
      let newCol = col + dirs[newD][1];

      if (!visited.has([newRow, newCol].join()) && robot.move()) {
        backtracking(newRow, newCol, newD);
        goBack();
      }
      // turn the robot following chosen direction : clockwise
      robot.turnRight();
    }
  }

  backtracking(0, 0, 0);
};
// @lc code=end


/**
 * Spiral Backtracking
 * 
 * - Time complexity: O(N - M), where N is a number of cells in the room and M is a number of obstacles.
 * - Space complexity: O(N - M).
 */
