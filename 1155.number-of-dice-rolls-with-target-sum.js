/*
 * @lc app=leetcode id=1155 lang=javascript
 *
 * [1155] Number of Dice Rolls With Target Sum
 */

/**
 * tags: #dynamic-programming, #01-knapsack-comb
 */

// @lc code=start
/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  let dp = Array.from(new Array(d + 1), () => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  // d * f = combination
  for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= target; j++) {
      for (let k = 1; k <= f && j >= k; k++) {
        dp[i][j] += dp[i - 1][j - k];
      }
    }
  }
 
  return dp[d][target];
};
// @lc code=end

