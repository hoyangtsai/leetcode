/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

 // #dynamic-programming, #fibonacci
 // @adobe, @apple

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 2) return n;

  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
  // Fibonacci number
  // time complexity: O(n). Single loop upto n is required to calculate n power of th.
  // space complexity: O(1). Constant space is used.
};
// @lc code=end
