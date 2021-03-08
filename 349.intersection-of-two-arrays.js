/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

 // [binary-search]

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const interNums = [];
  for (const n of nums1) {
    if (interNums.indexOf(n) < 0 && nums2.indexOf(n) > -1) {
      interNums.push(n);
    }
  }
  return interNums;
};
// @lc code=end

