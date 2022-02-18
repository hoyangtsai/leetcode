/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
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

