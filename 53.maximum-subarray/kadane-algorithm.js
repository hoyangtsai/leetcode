/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

/**
 * tags: #kadane-algorithm, #dynamic-programming, #max-subarray
 * {@link 1746.maximum-subarray-sum-after-one-operation.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSub = 0;
  let maxSub = -Infinity;

  for (const num of nums) {
    currentSub = Math.max(num, currentSub + num);
    maxSub = Math.max(maxSub, currentSub);
  }

  return maxSub;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */