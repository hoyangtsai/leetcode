/*
 * @lc app=leetcode id=1991 lang=javascript
 *
 * [1991] Find the Middle Index in Array
 */

/**
 * tags: #math
 * {@link 724.find-pivot-index.js}
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
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