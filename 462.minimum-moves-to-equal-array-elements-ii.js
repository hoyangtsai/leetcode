/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (const num of nums) {
    sum += Math.abs(nums[parseInt(nums.length / 2)] - num);
  }
  return sum;
};
// @lc code=end

