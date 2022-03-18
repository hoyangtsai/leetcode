/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

/**
 * #facebook, #amazon
 * tags: #prefix-sum #bidirectional
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const N = nums.length;

  let ans = Array(N);

  ans[0] = 1;
  for (let i = 1; i < N; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = N - 1; i >= 0; i--) {
    ans[i] = ans[i] * right;
    right *= nums[i];
  }

  return ans;
};
// @lc code=end

