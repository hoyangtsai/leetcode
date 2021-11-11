/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @facebook, @microsoft, @amazon
// tags: #math, #string

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  if (str === null || str.length == 0) return 0;

  str = str.trim();

  // 3. +/- sign
  let positive = true;
  let i = 0;
  if (str.charAt(0) == '+') {
    i++;
  } else if (str.charAt(0) == '-') {
    positive = false;
    i++;
  }

  const minVal = Math.pow(-2, 31);
  const maxVal = Math.pow(2, 31);

  // 4. calculate real value
  let tmp = 0;
  for (; i < str.length; i++) {
    if (/\D/.test(str.charAt(i)) || isNaN(str.charAt(i))) break;

    let digit = +str.charAt(i);

    // 5. handle min & max
    if (positive) {
      tmp = (10 * tmp) + digit;
      if (tmp >= maxVal) return maxVal - 1;
    } else {
      tmp = (10 * tmp) - digit;
      if (tmp < minVal) return minVal;
    }
  }

  let ret = Number.parseInt(tmp, 10);
  return ret;
};
// @lc code=end

