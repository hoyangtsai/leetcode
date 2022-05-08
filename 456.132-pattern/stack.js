/*
 * @lc app=leetcode id=456 lang=javascript
 *
 * [456] 132 Pattern
 */

/**
 * tags: #stack
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  if (nums.length < 3) return false;

  let min = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    min[i] = Math.min(min[i - 1], nums[i]);
  }

  let stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > min[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= min[i]) {
        stack.pop();
      }
      if (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
        return true;
      }
      stack.push(nums[i]);
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */