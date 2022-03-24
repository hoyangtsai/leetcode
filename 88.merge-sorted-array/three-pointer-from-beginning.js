/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // Make a copy of the first m elements of nums1.
  let nums1Copy = [];
  for (let i = 0; i < m; i++) {
    nums1Copy[i] = nums1[i];
  }

  // Read pointers for nums1Copy and nums2 respectively.
  let p1 = 0, p2 = 0;

  // Compare elements from nums1Copy and nums2
  // and write the smallest to nums1.
  for (let p = 0; p < m + n; p++) {
    if ((p1 < m && nums1Copy[p1] < nums2[p2]) || p2 > nums2.length - 1) {
      nums1[p] = nums1Copy[p1++];
    } else {
      nums1[p] = nums2[p2++];
    }
  }
};
// @lc code=end


/**
 * - Time complexity: O(n + m).
 * - Space complexity: O(m).
 */


let arr1 = [1];
let arr2 = [];
merge(arr1, 1, arr2, 0);

console.log('arr1 :>> ', arr1);