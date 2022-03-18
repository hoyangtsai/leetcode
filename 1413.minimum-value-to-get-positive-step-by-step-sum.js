/*
 * @lc app=leetcode id=1413 lang=javascript
 *
 * [1413] Minimum Value to Get Positive Step by Step Sum
 */

/**
 * tags: #prefix-sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  // minVal + startValue = 1, which is exactly startValue = 1 - minVal.
  let minVal = 0;
  let total = 0;
  
  for (const num of nums) {
    total += num;
    minVal = Math.min(minVal, total);
  }

  return -minVal + 1;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */