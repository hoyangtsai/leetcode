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
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */