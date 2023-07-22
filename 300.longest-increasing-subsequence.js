/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

/**
 * tags: #dynamic-programming, #longest-subsequence, #array-number-max-increasing-sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // init state 1 represents the length of the longest increasing subsequence
  let dp = Array(nums.length).fill(1);

  for (let j = 1; j < dp.length; j++) {
    for (let i = 0; i < j; i++) {
      // previous greater than current can build a subsequence
      if (nums[j] > nums[i]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }

  let longest = 0;
  for (const c of dp) {
    longest = Math.max(longest, c);
  }

  return longest;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(N).
 */
