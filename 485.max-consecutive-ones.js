/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max1s = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      max1s = Math.max(max1s, count);
      count = 0;
    }
  }
  return Math.max(max1s, count);

  // one line of code
  // return Math.max(...nums.join('').split(0).map(ones => ones.length));
};
// @lc code=end

