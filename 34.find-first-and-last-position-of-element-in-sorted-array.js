/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

/**
 * tags: #binary-search
 * #google-interview
 * {@link 287.find-the-duplicate-number/binary-search.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  function find(nums, target, isFirst) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
      let mid = parseInt((l + r) / 2);

      if (nums[mid] == target) {
        if (isFirst) {
          // This means we found our lower bound.
          if (mid == l || nums[mid - 1] != target) {
            return mid;
          }

          // Search on the left side for the bound.
          r = mid - 1;
        } else {
          // This means we found our upper bound.
          if (mid == r || nums[mid + 1] != target) {
            return mid;
          }

          // Search on the right side for the bound.
          l = mid + 1;
        }
      } else if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      }
    }

    return -1;
  }

  let firstOccurrence = find(nums, target, true);

  if (firstOccurrence == -1) {
    return [ -1, -1 ];
  }
        
  let lastOccurrence = find(nums, target, false);

  return [firstOccurrence, lastOccurrence];
};
// @lc code=end


/** 
 * - Time complexity: O(log N).
 * - Space complexity: O(1).
 */