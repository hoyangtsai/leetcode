/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

/**
 * tags: #matrix, #dynamic-programming, #matrix-move-possibility
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const R = obstacleGrid.length;
  const C = obstacleGrid[0].length;

  // If the starting cell has an obstacle, then simply return as there would be
  // no paths to the destination.
  if (obstacleGrid[0][0] == 1) {
    return 0;
  }

  // Number of ways of reaching the starting cell = 1.
  obstacleGrid[0][0] = 1;

  // Filling the values for the first column
  for (let i = 1; i < R; i++) {
    obstacleGrid[i][0] = (obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1) ? 1 : 0;
  }

  // Filling the values for the first row
  for (let i = 1; i < C; i++) {
    obstacleGrid[0][i] = (obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1) ? 1 : 0;
  }

  // Starting from cell(1,1) fill up the values
  // No. of ways of reaching cell[i][j] = cell[i - 1][j] + cell[i][j - 1]
  // i.e. From above and left.
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (obstacleGrid[i][j] == 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  }

  // Return value stored in rightmost bottommost cell. That is the destination.
  return obstacleGrid[R - 1][C - 1];
};
// @lc code=end


/**
 * - Time complexity: O(M * N).
 * - Space complexity: O(1). We utilizing the `obstacleGrid` as the DP array. Hence, no extra space.
 */