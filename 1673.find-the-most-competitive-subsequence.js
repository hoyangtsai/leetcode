/*
 * @lc app=leetcode id=1673 lang=javascript
 *
 * [1673] Find the Most Competitive Subsequence
 */

/**
 * tags: #stack, #monotonic-stack
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && 
      nums[stack[stack.length - 1]] > nums[i] && 
      nums.length - i + stack.length > k) {
      stack.pop();
    }
    if (stack.length < k) {
      stack.push(i);
    }
  }

  let res = [];
  for (let i = k - 1; i >= 0; i--) {
    res[i] = nums[stack.pop()];
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(k).
 */