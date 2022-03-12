/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

/**
 * tags: #math
 * {@link 1991.find-the-middle-index-in-array.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0, leftSum = 0;
  for (const n of nums) {
    sum += n;
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - nums[i] - leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */