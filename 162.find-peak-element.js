/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @facebook, @amazon, @microsoft
// #array, #binary-search

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let l = 0, r = nums.length;
  while (l < r) {
    let mid = parseInt(l + (r - l) / 2);
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  // l = r, return l or r is the same.
  return l;
};
// @lc code=end


/** 
 * Binary search
 * 
 * - Time complexity: O(log n).
 * - Space complexity: O(1).
 */