/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  return Math.max(Math.min((parseInt(s, 10) || 0), Math.pow(2, 31) - 1), Math.pow(-2, 31));
};
// @lc code=end

