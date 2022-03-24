/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

/**
 * tags: #two-pointers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const n = nums.length;

  let left = 0, right = n - 1;
  let result = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    let num;
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      num = nums[left];
      left++;
    } else {
      num = nums[right];
      right--;
    }
    result[i] = num * num;
  }

  return result;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */