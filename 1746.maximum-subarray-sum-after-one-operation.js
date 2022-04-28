/*
 * @lc app=leetcode id=1746 lang=javascript
 *
 * [1746] Maximum Subarray Sum After One Operation
 */

/**
 * tags: #dynamic-programming
 * {@link 53.maximum-subarray/kadane-algorithm.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
  let a = 0, b = 0;
  let max = -Infinity;
  for (const n of nums) {
    b = Math.max(n * n, Math.max(b + n, a + n * n));
    a = Math.max(0, a + n);
    max = Math.max(max, b);
  }
  return max;
};
// @lc code=end


/**
 * Time complexity: O(n).
 * Space complexity: O(1).
 */