/*
 * @lc app=leetcode id=1770 lang=javascript
 *
 * [1770] Maximum Score from Performing Multiplication Operations
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;

  let dp = Array.from(Array(m + 1).fill(0), () => Array(m + 1).fill(0));

  for (let j = m - 1; j >= 0; j--) {
    for (let i = j; i >= 0; i--) {
      dp[j][i] = Math.max(
        multipliers[j] * nums[i] + dp[j + 1][i + 1],
        multipliers[j] * nums[n - 1 - (j - i)] + dp[j + 1][i]
      );
    }
  }

  return dp[0][0];
};
// @lc code=end


/**
 * - Time complexity: O(M^2)
 * - Space complexity: O(M^2)
 */