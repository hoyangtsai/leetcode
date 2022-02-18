/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    let mid = parseInt(left + (right - left) / 2);
    // mid is odd, which mean length of the array is also odd
    if (mid % 2 == 1) mid--;
    if (nums[mid] == nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
// @lc code=end


/**
 * - Time complexity: O(log n/2) = O(log n).
 * - Space complexity: O(1).
 */