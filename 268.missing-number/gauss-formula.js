/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @microsoft, @amazon, @facebook
// #array, #hash-table, #bit-manipulation, #math

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = 0;
  for (const n of nums) {
    actualSum += n;
  }
  return expectedSum - actualSum;
};
// @lc code=end


/**
 * Gauss Formula
 * 
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */