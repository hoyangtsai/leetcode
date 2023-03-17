/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

/**
 * #string, #parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let parenthesesCount = 0;
  let result = '';

  for (const char of s) {
    if (char === '(') {
      if (parenthesesCount > 0) {
        result += char;
      }
      parenthesesCount++;
    } else {
      parenthesesCount--;
      if (parenthesesCount > 0) {
        result += char;
      }
    }
  }
  return result;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */