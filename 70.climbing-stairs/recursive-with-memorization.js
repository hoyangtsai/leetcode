/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

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
// @lc code=end
