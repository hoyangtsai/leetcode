/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

/**
 * tags: #bit-manipulation, #math
 * @link file://./231.power-of-two.js
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n == 0) return false;
  while (n % 4 == 0) n /= 4;
  return n == 1;
};
// @lc code=end

