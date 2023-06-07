/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

/**
 * @Nvidia
 * tags: #binary-search, #array-number-find-unique
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
    let halvesAreEven = (right - mid) % 2 == 0;

    if (nums[mid + 1] == nums[mid]) {
      if (halvesAreEven) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid - 1] == nums[mid]) {
      if (halvesAreEven) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    } else {
      return nums[mid];
    }
  }

  return nums[left];
};
// @lc code=end


/**
 * - Time complexity: O(log n).
 * - Space complexity: O(1).
 */