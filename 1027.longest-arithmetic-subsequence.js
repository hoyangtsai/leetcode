/*
 * @lc app=leetcode id=1027 lang=javascript
 *
 * [1027] Longest Arithmetic Subsequence
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
  let maxLength = 0;
  let dp = Array(nums.length);
  for (let right = 0; right < nums.length; right++) {
    dp[right] = new Map();
    for (let left = 0; left < right; left++) {
      let diff = nums[left] - nums[right];
      dp[right].set(diff, (dp[left].get(diff) || 1) + 1);
      maxLength = Math.max(maxLength, dp[right].get(diff));
    }
  }
  return maxLength;
};
// @lc code=end


/**
 * - Time complexity: O(n^2)
 * - Space complexity: O(n^2)
 */