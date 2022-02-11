/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

/**
 * tags: #dynamic-programming, #01-knapsack
 * {@link change|./518.coin-change-2.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);

  let diff = sum - target;

  if (diff % 2 != 0 || diff < 0) return 0;

  let mid = Math.floor(diff / 2);

  let dp = new Array(mid + 1).fill(0);
  dp[0] = 1;

  for (const num of nums) {
    for (let i = mid; i >= num; i--) {
      dp[i] += dp[i - num];
    }
  }

  return dp[mid];
};
// @lc code=end


findTargetSumWays([100], -200);