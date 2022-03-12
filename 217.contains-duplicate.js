/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

 /**
  * tags: #hash-table
  */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // return nums.length != new Set(nums).size;

  while (nums.length > 0) {
    const n = nums.shift();
    if (nums.indexOf(n) > -1) {
      return true;
    }
  }
  return false;
};
// @lc code=end

