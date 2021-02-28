/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

 // #two-pointer

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i ++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// @lc code=end

