/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

/**
 * tags: #dynamic-programming
 * {@link change|./518.coin-change-2.js}
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
// @lc code=end

/**
 * 
 * - Time complexity: O(n). Single loop upto n.
 * - Space complexity: O(n), an array of size n is used.
 */
