/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

/**
 * tags: #array-number-calculation
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // plus one overflow
    if (digits[i] == 9) {
      digits[i] = 0;
    } else { // have the rightmost non-nine
      digits[i]++; // increase the rightmost non-nine by 1
      return digits;
    }
  }
  // all the digits are 9
  digits.unshift(1);
  return digits;
};
// @lc code=end

