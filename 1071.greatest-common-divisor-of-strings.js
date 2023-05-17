/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */

/**
 * tags: #greatest-common-division
 * {@link 1799.maximize-score-after-n-operations.js}
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  function gcd(x, y) {
    if (y == 0) {
      return x;
    }
    return gcd(y, x % y);
  }

  // Check if they have non-zero GCD string.
  if ((str1 + str2) != (str2 + str1)) {
    return "";
  }

  // Get the GCD of the two lengths.
  let gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
};
// @lc code=end


/**
 * - Time complexity: O(m + n).
 * = Space complexity: O(m + n).
 */