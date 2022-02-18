/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

/**
 * tags: #bit-manipulation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};
// @lc code=end


/**
 * 
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */