/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

/**
 * tags: #fibonacci
 * {@link 70.climbing-stairs/fibonacci-number.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n;

  let n1 = 0, n2 = 1;
  for (let i = 2; i <= n; i++) {
    let cur = n1 + n2;
    n1 = n2;
    n2 = cur;
  }

  return n2;
};
// @lc code=end

/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */