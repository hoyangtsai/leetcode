/*
 * @lc app=leetcode id=1746 lang=javascript
 *
 * [1746] Maximum Subarray Sum After One Operation
 */

// #dynamic-programming
// &53

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
  let a = 0, b = 0;
  let res = Number.MIN_VALUE;
  for (const n of nums) {
    b = Math.max(n * n, Math.max(b + n, a + n * n));
    a = Math.max(0, a + n);
    res = Math.max(res, b);
  }
  return res;
};
// @lc code=end


/**
 * Time complexity: O(n).
 * Space complexity: O(1).
 */
