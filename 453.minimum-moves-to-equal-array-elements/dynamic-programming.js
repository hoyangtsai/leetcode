/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = (moves + nums[i]) - nums[i - 1];
    nums[i] += moves;
    moves += diff;
  }
  return moves;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(1).
 */