/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

/**
 * tags: #dynamic-programming, #game-theory
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
  const n = nums.length;
  let dp = Array.from(Array(n).fill(0), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }

  console.table(dp);

  console.log('===============================');
  
  // n = 3
  for (let diff = 1; diff < n; diff++) {
    // diff = 1, n - diff = 2
    // diff = 2, n - diff = 1
    for (let left = 0; left < n - diff; left++) {
      // 2 loops
      // left = 0, right = 1
      // left = 1, right = 2
      // 1 loop
      // left = 0, right = 2
      let right = left + diff;
      dp[left][right] = Math.max(
        nums[left] - dp[left + 1][right],
        nums[right] - dp[left][right - 1]
      );

      console.table(dp);
    }
  }

  return dp[0][n - 1] >= 0;
};
// @lc code=end


/**
 * Bottom-up DP
 * 
 * - Time complexity: O(n^2)
 * - Space complexity: O(n^2)
 */


PredictTheWinner([1,5,2])