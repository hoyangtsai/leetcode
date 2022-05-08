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

  for (let j = nums.length - 1, k = nums.length; j >= 0; j--) {
    if (nums[j] > min[j]) {
      while (k < nums.length && nums[k] <= min[j])
        k++;
      if (k < nums.length && nums[k] < nums[j])
        return true;
      nums[--k] = nums[j];
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */