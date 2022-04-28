/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

/**
 * tags: #math
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      total -= symbols[s[i]];
    } else {
      total += symbols[s[i]];
    }
  }

  return total;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */