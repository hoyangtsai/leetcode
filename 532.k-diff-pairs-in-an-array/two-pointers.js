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
  let result = 0;
  while (left < nums.length && right < nums.length) {
    if (left == right || nums[right] - nums[left] < k) {
      // List item 1 in the text
      right++;
    } else if (nums[right] - nums[left] > k) {
      // List item 2 in the text
      left++;
    } else {
      // List item 3 in the text
      left++;
      result++;
      while (left < nums.length && nums[left] == nums[left - 1])
        left++;
    }
  }
  return result;
};
// @lc code=end


/**
 * - Time complexity: O(N log N).
 * - Space complexity: O(N)
 */