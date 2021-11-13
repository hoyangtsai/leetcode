/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
};
// @lc code=end


/**
 * - Time complexity: O(m * n).
 * - Space complexity: O(1).
 */