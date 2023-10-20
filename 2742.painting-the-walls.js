/*
 * @lc app=leetcode id=2742 lang=javascript
 *
 * [2742] Painting the Walls
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
  const n = cost.length;

  let dp = Array.from(Array(n + 1).fill(0), () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    dp[n][i] = 1e9;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let remain = 1; remain <= n; remain++) {
      let paint = cost[i] + dp[i + 1][Math.max(0, remain - 1 - time[i])];
      let dontPaint = dp[i + 1][remain];
      dp[i][remain] = Math.min(paint, dontPaint);
    }
  }

  return dp[0][n];
};
// @lc code=end


/**
 * - Time complexity: O(n^2)
 * - Space complexity: O(n^2)
 */