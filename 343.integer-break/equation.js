/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 3) {
    return n - 1;
  }

  if (n % 3 == 0) {
    return Math.pow(3, parseInt(n / 3));
  }

  if (n % 3 == 1) {
    return Math.pow(3, parseInt(n / 3 - 1)) * 4;
  }

  return Math.pow(3, parseInt(n / 3)) * 2;
};
// @lc code=end


/**
 * - Time complexity: O(log n)
 * - Space complexity: O(1)
 */