/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let min = Infinity, max = -Infinity;
  let l = 0, r = nums.length - 1;
  let lb = -1, rb = 0;
  while (r >= 0) {
    nums[l] >= max ? max = nums[l] : lb = l;
    nums[r] <= min ? min = nums[r] : rb = r;

    l++;
    r--;
  }

  return lb - rb + 1;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */