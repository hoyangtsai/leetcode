/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @google, @facebook, @amazon
// #dynamic-programming

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = Array.from(Array(m).fill(1), () => Array(n).fill(1));

  for (let col = 1; col < m; col++) {
    for (let row = 1; row < n; row++) {
      dp[col][row] = dp[col - 1][row] + dp[col][row - 1];
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end


/**
 * - Time complexity: O(N * M).
 * - Space complexity: O(N * M).
 */