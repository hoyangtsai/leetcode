/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let sum = 0;
  let map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sum %= k; 
    if (map.get(sum) && i - map.get(sum) > 1) {
      return true;
    }
    map.set(sum, i);
  }
  return false;
};
// @lc code=end

