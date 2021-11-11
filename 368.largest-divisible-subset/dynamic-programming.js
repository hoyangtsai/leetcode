/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// #dynamic-programming

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const N = nums.length;

  let dp = Array.from(Array(N), () => []);

  nums.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    let maxSubset = [];

    // find the largest division subset of previous elements
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] == 0 && maxSubset.length < dp[j].length) {
        maxSubset = dp[j];
      }
    }

    dp[i] = [...dp[i], ...maxSubset];
    dp[i].push(nums[i]);
  }

  let res = [];
  for (let i = 0; i < N; i++) {
    if (res.length < dp[i].length) {
      res = dp[i];
    }
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(N^2).
 */
