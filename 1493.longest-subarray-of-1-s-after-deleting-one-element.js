/*
 * @lc app=leetcode id=1493 lang=javascript
 *
 * [1493] Longest Subarray of 1's After Deleting One Element
 */

/**
 * tags: #sliding-window
 * {@link 487.max-consecutive-ones-ii.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let maxWindow = 0;
  let left = 0;
  let lastZero = -1;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      left = lastZero + 1;
      lastZero = right;
    }

    maxWindow = Math.max(maxWindow, right - left);
  }

  return maxWindow;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */