/*
 * @lc app=leetcode id=856 lang=javascript
 *
 * [856] Score of Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let cur = 0;
  let stack = [];

  // balanced parentheses always starts with '('
  for (const c of s) {
    if (c == '(') {
      stack.push(cur);
      cur = 0;
    } else {
      cur = stack.pop() + Math.max(cur * 2, 1);
    }
  }

  return cur;
};
// @lc code=end


scoreOfParentheses("()(()())") // 1 + (2 * 2) = 5
scoreOfParentheses("()((()()())()())") // 1 + (2 * ((2 * 3) + 2)) = 1 + (2 * (6 + 2)) = 17

// stack = [1, 1], cur = 1 + 2 = 3
// stack = [1, 1, 3] 