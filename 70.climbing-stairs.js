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

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return n;

  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
  // dynamic programming
  // time complexity: O(n). Single loop upto n.
  // space complexity: O(n), an array of size n is used.
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n;

  let counting = function (remain, cache) {
    if (remain < 0) {
      return 0;
    }
    if (remain === 0) {
      return 1;
    }
    if (cache[remain]) {
      return cache[remain];
    }

    cache[remain] = counting(remain - 1, cache) + counting(remain - 2, cache);
    return cache[remain];
  }

  return counting(n, {});
  // recursive with memorization
  // time complexity: O(n). Size of recursion tree can goe upto n
  // space complexity: O(n), the depth of the recursion tree can go upto n.
};