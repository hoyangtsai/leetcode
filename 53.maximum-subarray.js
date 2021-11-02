/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @linkedin, @amazon, @microsoft, @adobe, @apple, @google
// #dynamic-programming

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSub = 0;
  let maxSub = Number.NEGATIVE_INFINITY;

  for (const num of nums) {
    currentSub = Math.max(num, currentSub + num);
    maxSub = Math.max(maxSub, currentSub);
  }

  return maxSub;
};
// @lc code=end

/**
 * Kadane's Algorithm
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */
