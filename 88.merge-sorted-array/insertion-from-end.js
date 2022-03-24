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
var merge = function (nums1, m, nums2, n) {
  let insertPos = m + n - 1;
  m -= 1, n -= 1;
  while (n >= 0) {
    nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
  }
};
// @lc code=end


/**
 * - Time complexity: O(n + m).
 * - Space complexity: O(1).
 */
