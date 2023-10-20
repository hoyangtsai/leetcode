/*
 * @lc app=leetcode id=1095 lang=javascript
 *
 * [1095] Find in Mountain Array
 */

/**
 * tags: #binary-search
 * {@link 162.find-peak-element.js}
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  const len = mountainArr.length();

  // 1. Find the index of the peak element
  let low = 1, high = len - 2;
  while (low != high) {
    let mid = parseInt((low + high) / 2);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  const peakIndex = low;
  // 2. Search in the strictly increasing part of the array
  low = 0;
  high = peakIndex;
  while (low != high) {
    let mid = parseInt((low + high) / 2);
    if (mountainArr.get(mid) < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  // Check if the target is present in the strictly increasing part
  if (mountainArr.get(low) === target) {
    return low;
  }

  // 3. Otherwise, search in the strictly decreasing part
  low = peakIndex + 1;
  high = len - 1;
  while (low !== high) {
    const mid = parseInt((low + high) / 2);
    if (mountainArr.get(mid) > target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  // Check if the target is present in the strictly decreasing part
  if (mountainArr.get(low) === target) {
    return low;
  }

  // Target is not present in the mountain array
  return -1;
};
// @lc code=end


/**
 * - Time complexity: O(log N)
 * - Space complexity: O(1)
 */