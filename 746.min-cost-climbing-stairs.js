/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @amazon, @uber
// #dynamic-programming

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = new Array(cost.length + 1).fill(0);

  for (let i = 2; i < dp.length; i++) {
    let takeOneStep = dp[i - 1] + cost[i - 1];
    let takeTwoSteps = dp[i - 2] + cost[i - 2];
    dp[i] = Math.min(takeOneStep, takeTwoSteps);
  }

  return dp[dp.length - 1];
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */