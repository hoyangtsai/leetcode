/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// #dynamic-programming

/**
 * Algorithm
 * 
 * Any element in the array could correspond to one of the three possible state:
 * 1. up position, it means nums[i] > nums[i - 1]
 * 1. down position, it means nums[i] < nums[i - 1]
 * 3. equal to position, nums[i] == nums[i - 1] 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length < 2) return nums.length;

  let up = 1;
  let down = 1;

  for (let i = 1; i < nums.length; i++) {
    // current > previous
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) { // current < previous
      down = up + 1;
    }
  }

  return Math.max(down, up);
};
// @lc code=end


/**
 * Time complexity: O(n).
 * Space complexity: O(1).
 */