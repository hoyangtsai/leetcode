/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @facebook
// #array, #binary-search
// #google-interview

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    let mid = ~~((l + r) / 2);
    if (arr[mid] < arr[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};
// @lc code=end

/**
 * Binary search
 * 
 * - Time complexity: O(log N), where N is the length arr.
 * - Space complexity: O(1).
 */