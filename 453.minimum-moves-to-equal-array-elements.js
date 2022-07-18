/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    sum += nums[i] - nums[0];
  }
  return sum;
};
// @lc code=end

