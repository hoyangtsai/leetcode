/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  // returns true if element `target` exists in the first sorted array.
  function existsInFirst(nums, start, element) {
    return nums[start] <= element;
  }

  // returns true if we can reduce the search space in current binary search space
  function isBinarySearchHelpful(arr, left, element) {
    return arr[left] != element;
  }

  const n = nums.length;
  let start = 0, end = n - 1;
  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);

    if (nums[mid] == target) {
      return true;
    }

    // all the left side of numbers are the same
    if (!isBinarySearchHelpful(nums, start, nums[mid])) {
      start++;
      continue;
    }

    // which array does pivot belong to
    let pivotArray = existsInFirst(nums, start, nums[mid]);

    // which array does target belong to
    let targetArray = existsInFirst(nums, start, target);

    // 0 ^ 1 || 1 ^ 0 = true
    if (pivotArray ^ targetArray) { // If pivot and target exist in different sorted arrays, recall that xor is true when both operands are distinct
      if (pivotArray) {
        start = mid + 1; // pivot in the first, target in the second
      } else {
        end = mid - 1; // target in the first, pivot in the second
      }
    } else { // If pivot and target exist in same sorted array (either F or S)
      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
};
// @lc code=end

