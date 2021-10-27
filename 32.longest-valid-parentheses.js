/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @amazon, @facebook, @apple, @adobe, @microsoft
// #stack
// &20

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [-1];
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i); // index
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n). n is the length of the given string.
 * - Space complexity: O(n). The size of stack can go up to n.
 */