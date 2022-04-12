/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

/**
 * tags: #stack
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = [];
  for (const op of ops) {
    if (op == 'C') {
      stack.pop();
    } else if (op == 'D' && stack.length > 0) {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op == '+' && stack.length > 1) {
      let top = stack.pop();
      let newTop = top + stack[stack.length - 1];
      stack.push(top, newTop);
    } else {
      stack.push(parseInt(op));
    }
  }

  let ans = 0;
  for (const score of stack) {
    ans += score;
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the length of ops.
 * - Space complexity: O(N), the space used to store the stack.
 */