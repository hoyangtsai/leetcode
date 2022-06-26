/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

/**
 * tags: #math, #bit-manipulation
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -(2 ** 31) && divisor === -1) return 2147483647;

  let isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  let count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= (dividend >> 1)) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  return isPositive ? result : -result;
};
// @lc code=end


/**
 * - Time complexity: O(log N).
 * - Space complexity: O(1).
 */