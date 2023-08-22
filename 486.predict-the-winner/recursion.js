/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
  const n = nums.length;

  function maxDiff(nums, left, right) {
    if (left == right) {
      return nums[left];
    }

    let scoreByLeft = nums[left] - maxDiff(nums, left + 1, right);
    let scoreByRight = nums[right] - maxDiff(nums, left, right - 1);

    return Math.max(scoreByLeft, scoreByRight);
  }
  
  return maxDiff(nums, 0, n - 1) >= 0;
};
// @lc code=end


/**
 * - Time complexity: O(2^n)
 * - Space complexity: O(n)
 */