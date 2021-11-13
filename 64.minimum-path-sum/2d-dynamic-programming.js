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

  let dp = Array.from(Array(m).fill(0), () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j != 0) { // in the horizontal edges
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } 
      else if (i != 0 && j == 0) { // in the vertical edges
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      } 
      else if (i != 0 && j != 0) { // in the middle somewhere
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      } else { // in the corner
        dp[i][j] = grid[i][j];
      }
    }    
  }

  return dp[m - 1][n - 1];
};
// @lc code=end


/**
 * - Time complexity: O(m * n).
 * - Space complexity: O(m * n).
 */