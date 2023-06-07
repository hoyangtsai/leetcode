/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

/**
 * @Nvidia
 * tags: #two-pointers, #dutch-national-flag, #three-number-sort
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let low = 0, mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */
