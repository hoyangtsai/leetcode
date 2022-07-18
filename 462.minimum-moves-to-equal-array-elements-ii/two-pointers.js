/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

/**
 * tags: #two-pointers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  let l = 0, r = nums.length - 1, sum = 0;
  nums.sort((a, b) => a - b);
  while (l < r) {
    sum += nums[r] - nums[l];
    l++;
    r--;
  }
  return sum;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(1).
 */