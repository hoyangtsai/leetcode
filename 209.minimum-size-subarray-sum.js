/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

/**
 * tags: #sliding-window, #subarray-minimum-window
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let minWindow = Infinity;
  let currentSum = 0;
  for (let right = 0, left = 0; right < nums.length; right++) {
    currentSum += nums[right];
    
    while (currentSum >= target) {
      minWindow = Math.min(minWindow, right - left + 1);
      currentSum -= nums[left]; // subtract the leftmost value until currentSum less than target
      left++;
    }
  }

  return minWindow === Infinity ? 0 : minWindow;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */