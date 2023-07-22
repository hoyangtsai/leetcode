/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

/**
 * tags: #sliding-window, #LIS
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let ans = 0;
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] >= nums[i]) {
      j = i
    }
    ans = Math.max(ans, i - j + 1);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */