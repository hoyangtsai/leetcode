/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

/**
 * tags: #math
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let moves = 0, min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    moves += nums[i];
    min = Math.min(min, nums[i]);
  }
  return moves - min * nums.length;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */