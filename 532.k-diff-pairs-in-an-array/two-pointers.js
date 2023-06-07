/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

/**
 * tags: #two-pointers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  nums = nums.sort((a, b) => a - b);

  let left = 0, right = 1;
  let count = 0;
  while (left < nums.length && right < nums.length) {
    if (left == right || nums[right] - nums[left] < k) {
      right++;
    } else if (nums[right] - nums[left] > k) {
      left++;
    } else {
      left++;
      count++;
      while (left < nums.length && nums[left] == nums[left - 1])
        left++;
    }
  }
  return count;
};
// @lc code=end


/**
 * - Time complexity: O(N log N).
 * - Space complexity: O(N).
 */