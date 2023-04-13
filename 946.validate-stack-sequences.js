/*
 * @lc app=leetcode id=946 lang=javascript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const N = pushed.length;
  let stack = [];

  let j = 0;
  for (let x of pushed) {
    stack.push(x);
    while (stack.length > 0 && j < N && 
      stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  return j == N;
};
// @lc code=end

