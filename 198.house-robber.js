/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @amazon, @microsoft, @google
// #dynamic-programming

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const N = nums.length;

  if (N === 1) return nums[0];

  let first = 0;
  let second = 0;
  for (let i = 0; i < N; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }

  return second;
};
// @lc code=end


/**
 * Optimized DP
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */