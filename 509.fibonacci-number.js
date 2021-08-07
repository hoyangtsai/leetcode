/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n;

  let n2 = 0, n1 = 0, cur = 1;
  for (let i = 2; i <= n; i++) {
    n2 = n1;
    n1 = cur;
    cur = n2 + n1;
  }

  return cur;
};
// @lc code=end

