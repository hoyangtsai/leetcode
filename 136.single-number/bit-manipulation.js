/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

/**
 * tags: #bit-manipulation, #bitwise-operation
 * {@link 137.single-number-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let a = 0;
  for (let i of nums) {
    a ^= i;
  }
  return a;
};
// @lc code=end

