/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

/**
 * tags: #binary-search
 */

// @lc code=start
/**
 * [33.search-in-rotated-sorted-array]({@link ./33.search-in-rotated-sorted-array.js})
 * @see [Search in Rotated Sorted Array II]({@link ./81.search-in-rotated-sorted-array-ii/README.md})
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
  let left = 0, right = n - 1;
  while (left <= right) {
    let mid = parseInt(left + (right - left) / 2);

    if (nums[mid] == target) {
      return true;
    }

    // all the left side of numbers are the same
    if (!isBinarySearchHelpful(nums, left, nums[mid])) {
      left++;
      continue;
    }

    // which array does pivot belong to
    let pivotArray = existsInFirst(nums, left, nums[mid]);

    // which array does target belong to
    let targetArray = existsInFirst(nums, left, target);

    // 0 ^ 1 || 1 ^ 0 = true
    if (pivotArray ^ targetArray) { // If pivot and target exist in different sorted arrays, recall that xor is true when both operands are distinct
      if (pivotArray) {
        left = mid + 1; // pivot in the first, target in the second
      } else {
        right = mid - 1; // target in the first, pivot in the second
      }
    } else { // If pivot and target exist in same sorted array (either F or S)
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(N) worst case, O(log N) best case, where N is the length of the input array.
 * - Space complexity: O(1).
 */