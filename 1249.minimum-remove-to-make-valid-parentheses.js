/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

/**
 * tags: #stack, #stack-parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let str = s.split('');
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        str[i] = '';
      }
    }
  }

  // remove extra '(' by index
  for (let i of stack) str[i] = '';

  return str.join('');
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */