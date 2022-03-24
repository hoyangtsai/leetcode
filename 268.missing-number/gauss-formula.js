/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

/**
 * tags: #math, #missing-number, #sequence-sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // sequence sum
  let expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = 0;
  for (const n of nums) {
    actualSum += n;
  }
  return expectedSum - actualSum;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */