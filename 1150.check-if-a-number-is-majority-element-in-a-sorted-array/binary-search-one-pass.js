/*
 * @lc app=leetcode id=1150 lang=javascript
 *
 * [1150] Check If a Number Is Majority Element in a Sorted Array
 */

/**
 * tags: #binary-search
 * {@link 169.majority-element.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
  // Returns the index of the first element equal to or greater than the target.
  // If there is no instance of the target in the list, it returns the length of the list.
  function lowerBound(nums, target) {
    let start = 0, end = nums.length - 1;
    let index = nums.length;
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      if (nums[mid] >= target) {
        end = mid - 1;
        index = mid;
      } else {
        start = mid + 1;
      }
    }
    return index;
  }

  let firstIndex = lowerBound(nums, target);

  return firstIndex + parseInt(nums.length / 2) < nums.length
    && nums[firstIndex + parseInt(nums.length / 2)] == target;
};
// @lc code=end


/**
 * - Time complexity: O(log n).
 * - Space complexity: O(1).
 */