/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

/**
 * tags: #greedy, #google-interview, #top-100-liked-questions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, i + nums[i]);
    
    if (max >= nums.length - 1) {
      return true;
    }

    if (max <= i && nums[i] === 0) {
      return false;
    }
  }

  return false;
};
// @lc code=end


// canJump([3, 2, 1, 0, 4]);