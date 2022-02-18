/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
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

