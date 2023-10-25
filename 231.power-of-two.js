/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

/**
 * @Nvidia
 * tags: #bit-manipulation
 * @link file://./342.power-of-four.js
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 ? !(n & n - 1) : false;
};
// @lc code=end


/**
 * - Time complexity: O(1).
 * - Space complexity: O(1).
 */