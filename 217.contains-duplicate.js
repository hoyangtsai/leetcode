/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

 // #array, #hash-table
 // @airbnb, @palantir, @yahoo

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return nums.length != new Set(nums).size;
};
// @lc code=end
