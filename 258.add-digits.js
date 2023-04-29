/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

/**
 * tags: #math, #modular-arithmetic
 * {@link 504.base-7.js}
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num === 0 ? 0 : (num - 1) % 9 + 1;
};
// @lc code=end

