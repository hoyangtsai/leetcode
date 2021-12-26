/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

/**
 * tags: #greedy, #top-100-liked-questions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let jumps = 0, currentJumpEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // we continuously find the how far we can reach in the current jump
    farthest = Math.max(farthest, i + nums[i]);
    // if we have come to the end of the current jump,
    // we need to make another jump
    if (i == currentJumpEnd) {
      jumps++;
      currentJumpEnd = farthest;
    }
  }
  return jumps; 
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */