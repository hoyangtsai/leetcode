/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// #bit-manipulation
// @rakuten, @facebook

/**
 * 3 cases
 * 1. x + y
 * 2. x - y (where x > y)
 * 3. -x - y
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  while (b != 0) {
    let answer = a ^ b;
    let carry = (a & b) << 1;
    a = answer;
    b = carry;
  }

  return a;
};
// @lc code=end

/**
 * Bit Manipulation: Short Language-Specific Solution
 * Time complexity: O(1).
 * Space complexity: O(1).
 */