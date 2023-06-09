/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

/**
 * tags: #sorting
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  let mid = parseInt(nums.length / 2);
  return nums[mid];
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */