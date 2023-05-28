/*
 * @lc app=leetcode id=1406 lang=javascript
 *
 * [1406] Stone Game III
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
  const n = stoneValue.length;
  let dp = Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = stoneValue[i] - dp[i + 1];
    if (i + 2 <= n) {
      dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] - dp[i + 2]);
    }
    if (i + 3 <= n) {
      dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]);
    }
  }
  if (dp[0] > 0) {
    return "Alice";
  }
  if (dp[0] < 0) {
    return "Bob";
  }
  return "Tie";
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */