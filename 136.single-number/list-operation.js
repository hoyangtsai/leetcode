/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let noDuplicate = new Set();
  for (const i in nums) {
    if (!noDuplicate.has(nums[i])) {
      noDuplicate.add(nums[i]);
    } else {
      noDuplicate.delete(nums[i]);
    }
  }
  return noDuplicate.values().next().value;
};
// @lc code=end
