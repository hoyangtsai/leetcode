/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let stack = [];
  let l = nums.length;
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      l = Math.min(l, stack.pop());
    }
    stack.push(i);
  }
  stack = [];
  let r = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      r = Math.max(r, stack.pop());
    }
    stack.push(i);
  }

  return r - l > 0 ? r - l + 1 : 0;
};
// @lc code=end

