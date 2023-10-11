/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

/**
 * tags: #math
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 3) {
    return n - 1;
  }

  let ans = 1;
  while (n > 4) {
    ans *= 3;
    n -= 3;
  }
  return ans * n;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */