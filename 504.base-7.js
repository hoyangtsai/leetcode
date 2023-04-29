/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

/**
 * tags: #math, #modular-arithmetic
 * {@link 258.add-digits.js}
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num == 0) return "0";

  let isNeg = (num < 0);
  num = Math.abs(num);
  let digits = '';
  while (num > 0) {
    digits = String(num % 7) + digits;
    num = parseInt(num / 7);
  }

  return isNeg ? '-' + digits : digits;
};
// @lc code=end

