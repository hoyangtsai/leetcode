/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

/**
 * tags: #bit-manipulation, #bitwise-operation
 * {@link 137.single-number-ii.js}
 * {@link 287.find-the-duplicate-number.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = 0;
  for (let i of nums) {
    a ^= i;
    // 0 xor 0 = 0
    // 0 xor 1 = 1
    // 1 xor 0 = 1
    // 1 xor 1 = 0
  }
  return a;
};
// @lc code=end

