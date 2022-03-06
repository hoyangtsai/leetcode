/*
 * @lc app=leetcode id=487 lang=javascript
 *
 * [487] Max Consecutive Ones II
 */

/**
 * tags: #sliding-window, #two-pointers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max1s = 0;
  let numZeroes = 0;
  let left = 0, right = 0;
  while (right < nums.length) {
    if (nums[right] == 0) {
      numZeroes++;
    }

    while (numZeroes == 2) {
      if (nums[left] == 0) {
        numZeroes--;
      }
      left++;
    }

    max1s = Math.max(max1s, right - left + 1);

    right++;
  }

  return max1s;
};
// @lc code=end


/**
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 */