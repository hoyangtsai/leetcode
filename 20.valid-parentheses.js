/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

/**
 * com: #amazon, #linkedin, #microsoft, #facebook, #google, #apple, #paypay
 * tags: #stack, #string, #parentheses
 * #google-interview
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let i = 0 ; i < s.length; i++) {
    let c = s.charAt(i);
    switch(c) {
      case '(': stack.push(')');
        break;
      case '[': stack.push(']');
        break;
      case '{': stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
// @lc code=end
