/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

 // #binary-search, #hash-table

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const num1Hash = new Map();

  for (const n of nums1) {
    if (num1Hash.has(n)) {
      num1Hash.set(n, num1Hash.get(n) + 1);
    } else {
      num1Hash.set(n, 1);
    }
  }

  const interNums = [];
  for (const n of nums2) {
    if (num1Hash.has(n) && num1Hash.get(n) > 0) {
      interNums.push(n);
      num1Hash.set(n, num1Hash.get(n) - 1);
    }
  }

  return interNums;
};
// @lc code=end