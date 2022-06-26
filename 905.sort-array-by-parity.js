/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

/**
 * tags: #two-pointers, #number-swap
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    // left is odd, right is even
    if (nums[l] % 2 > nums[r] % 2) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    
    if (nums[l] % 2 == 0) l++;
    if (nums[r] % 2 == 1) r--;
  }
  return nums;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */