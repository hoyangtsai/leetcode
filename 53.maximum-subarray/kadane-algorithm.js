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
  let currentSum = 0;
  let maxSum = -Infinity;

  for (const num of nums) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */