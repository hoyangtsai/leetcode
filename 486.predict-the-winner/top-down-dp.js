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

  let dp = Array.from(Array(n).fill(-1), () => Array(n).fill(-1));

  function maxDiff(nums, left, right, n) {
    if (dp[left][right] != -1) {
      return dp[left][right];
    }
    if (left == right) {
      return nums[left];
    }

    let scoreByLeft = nums[left] - maxDiff(nums, left + 1, right, n);
    let scoreByRight = nums[right] - maxDiff(nums, left, right - 1, n);
    dp[left][right] = Math.max(scoreByLeft, scoreByRight);
        
    return dp[left][right];
  }

  return maxDiff(nums, 0, n - 1, n) >= 0;
};
// @lc code=end


/**
 * Top-down DP
 * 
 * - Time complexity: O(n^2).
 * - Space complexity: O(n^2).
 */