/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let longest = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    // in case the current is same as the previous
    if (nums[i] == nums[i - 1]) continue;
    if (nums[i] == nums[i - 1] + 1) {
      count += 1;
    } else {
      longest = Math.max(longest, count);
      count = 1;
    }
  }

  return Math.max(longest, count);
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity; O(1).
 */

// longestConsecutive([1, 2, 0, 1])