/*
 * @lc app=leetcode id=2215 lang=javascript
 *
 * [2215] Find the Difference of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  let ans1 = new Set(nums1);
  nums2.forEach(n => ans1.delete(n));

  let ans2 = new Set(nums2);
  nums1.forEach(n => ans2.delete(n));

  return [[...ans1], [...ans2]];
};
// @lc code=end


/**
 * - Time complexity: O(N + M).
 * - Space complexity: O(max(N, M)).
 */