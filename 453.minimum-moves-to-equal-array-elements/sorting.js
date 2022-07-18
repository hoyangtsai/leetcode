/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

/**
 * tags: #sorting
 * @link 462.minimum-moves-to-equal-array-elements-ii/sorting.js}
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


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(1).
 */