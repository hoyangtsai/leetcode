/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @facebook, @amazon, @microsoft
// #array, #two-pointers, #binary-search

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let left = 0;
  let right = arr.length - k; // right bound based on k
 
  while (left < right) {
    mid = parseInt((left + right) / 2);
    // x - mid greater than right most (largest) - x
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let result = [];
  for (let i = left; i < left + k; i++) {
    result.push(arr[i]);
  }
  return result;
};
// @lc code=end


/**
 * Binary search to find the left bound
 * 
 * - Time complexity: O(log(N - k) + k).
 * - Space complexity: O(1).
 */