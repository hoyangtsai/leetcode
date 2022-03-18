/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

/**
 * tags: #bit-manipulation, #calculation
 * {@link 67.add-binary.js}
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  // ensure a > b
  if (x < y) {
    return getSum(b, a);
  }

  const sign = a > 0 ? 1 : -1;

  if (a * b >= 0) {
    // sum of two positive/negative integers x + y
    while (y != 0) {
      let answer = x ^ y;
      let carry = (x & y) << 1;
      x = answer;
      y = carry;
    }
  } else {
    // difference of two positive integers x - y
    // where x > y
    while (y != 0) {
      let answer = x ^ y;
      let borrow = ((~x) & y) << 1;
      x = answer;
      y = borrow;
    }
  }

  return x * sign;
};
// @lc code=end

/**
 * Bit Manipulation: Easy and Language-Independent
 * Time complexity: O(1).
 * Space complexity: O(1).
 */