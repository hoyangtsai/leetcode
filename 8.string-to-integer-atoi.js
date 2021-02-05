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
var myAtoi = function(s) {
  const MIN_VALUE = Math.pow(-2, 31);
  const MAX_VALUE = Math.pow(2, 31) - 1;

  const str = s.trim();

  const num = str.match(/^[\+\-]?\d+/); // find a match

  if(!num) return 0;

  if (+num[0] > MAX_VALUE) return MAX_VALUE;
  if (+num[0] < MIN_VALUE) return MIN_VALUE;

  return +num[0];
};
// @lc code=end

