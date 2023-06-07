/*
 * @lc app=leetcode id=2390 lang=javascript
 *
 * [2390] Removing Stars From a String
 */

/**
 * tags: #stack, #string-removal, #string-remove-by-symbol
 * {@link 844.backspace-string-compare/build-string.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '*') stack.pop();
    else stack.push(s.charAt(i));
  }

  return stack.join('');
};
// @lc code=end

