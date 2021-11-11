/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // init state 1 represents the length of the longest increasing subsequence
  let dp = Array(nums.length).fill(1);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      // previous greater than current can build a subsequence
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
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

