/*
 * @lc app=leetcode id=1920 lang=javascript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  // return nums.map(a => nums[a]);

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] + n * (nums[nums[i]] % n);
  }

  for (let i = 0; i < n; i++) {
    nums[i] = parseInt(nums[i] / n);
  }

  return nums;
};
// @lc code=end

