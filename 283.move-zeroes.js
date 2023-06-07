/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

 /**
  * @Nvidia
  * tags: #two-pointers, #array-zero
  */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
      // nums[pos] = nums[i];
      // pos++;
    }
  }

  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end

