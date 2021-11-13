/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const n = grid[0].length;

  let dp = Array.from(Array(n).fill(0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j != 0) { // in the horizontal edges
        dp[j] = grid[i][j] + dp[j - 1];
      }
      else if (i != 0 && j == 0) { // in the vertical edges
        dp[j] = grid[i][j] + dp[j];
      }
      else if (i != 0 && j != 0) { // in the middle somewhere
        dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
      } else { // in the corner
        dp[j] = grid[i][j];
      }
    }
  }

  return dp[n - 1];
};
// @lc code=end


/**
 * - Time complexity: O(m * n).
 * - Space complexity: O(n).
 */