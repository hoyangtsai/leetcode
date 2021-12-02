/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

/**
 * com: #amazon, #google
 * tags: #fibonacci
 * {@link fib|./509.fibonacci-number.js}
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return n;

  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
};
// @lc code=end


/**
 * 
 * - Time complexity: O(n). Single loop upto n is required to calculate n power of th.
 * - Space complexity: O(1). Constant space is used.
 */
