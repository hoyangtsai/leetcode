/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

/**
 * tags: #monotonic-stack, #stack
 * {@link nextGreaterElement|./496.next-greater-element-i.js}
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;

  let ans = Array(n).fill(0);
  let stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      ans[i] = stack[stack.length - 1] - i;
    }
    
    stack.push(i);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */