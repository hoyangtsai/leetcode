/*
 * @lc app=leetcode id=856 lang=javascript
 *
 * [856] Score of Parentheses
 */

/**
 * tags: #stack
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


/**
 * - Time complexity: O(N)
 * - Space complexity: O(N)
 */

console.log(scoreOfParentheses("(()())")) // 4
// (        stack = [0], cur = 0
// ((       stack = [0, 0], cur = 0
// (()      stack = [0], cur = 1
// (()(     stack = [0, 1], cur = 0
// (()()    stack = [0], cur = 2
// (()())   stack = [], cur = Math.max(2 * 2, 1) = 4

console.log(scoreOfParentheses("()(()())")) // 1 + (2 * 2) = 5
// (          stack = [0], cur = 0
// ()         stack = [], cur = 1
// ()(        stack = [1], cur = 0
// ()((       stack = [1, 0], cur = 0
// ()(()      stack = [1], cur = 1
// ()(()(     stack = [1, 1], cur = 0
// ()(()()    stack = [1], cur = 2
// ()(()())   stack = [], cur = 1 + Math.max(2 * 2, 1) = 5

console.log(scoreOfParentheses("()((()()())()())")) // 1 + (2 * ((2 * 3) + 2)) = 1 + (2 * (6 + 2)) = 17
