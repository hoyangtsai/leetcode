/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */

// #math
// @linkedin, @apple

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  if (c < 0) return false;

  let i = 0, j = Number.parseInt(Math.sqrt(c))
  while (i <= j) {
    let sum = i * i + j * j;
    if (sum == c) {
      return true
    } else if (sum > c) {
      j --;
    } else {
      i ++;
    }
  }
  return false;
};
// @lc code=end
