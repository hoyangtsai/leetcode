/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

/**
 * tags: #bit-manipulation
 * {@link getSum|./371.sum-of-two-integers/};
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let x = parseInt(a, 2);
  let y = parseInt(b, 2);
  while (y != 0) {
    let answer = x ^ y;
    let carry = (x & y) << 1;
    x = answer;
    y = carry;
  }
  return x.toString(2);
};
// @lc code=end


/**
 * - Time complexity: O(N + M), where N and M are lengths of the input strings a and b.
 * - Space complexity: O(max(N, M)).
 */