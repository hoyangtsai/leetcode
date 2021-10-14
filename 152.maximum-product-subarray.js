/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @linkedin, @amazon, @google, @facebook
// #array, #dynamic-programming
// #google-interview

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = prevMax;
  for (let i = 1; i < nums.length; i++) {
    let curMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);

    prevMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
    prevMax = curMax;

    result = Math.max(curMax, result);
  }

  return result;
};
// @lc code=end


/**
 * Dynamic programming
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */