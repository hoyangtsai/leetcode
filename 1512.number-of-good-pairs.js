/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // nums[i] == nums[j] and i < j.
    let j = i + 1;
    while (j < nums.length) {
      if (nums[j] == nums[i]) count++;
      j++;
    }
  }
  return count;
};
// @lc code=end

