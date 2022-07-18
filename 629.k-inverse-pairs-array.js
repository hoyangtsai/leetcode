/*
 * @lc app=leetcode id=629 lang=javascript
 *
 * [629] K Inverse Pairs Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const dp = Array.from(Array(n + 1).fill(0), () => Array(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (j == 0)
        dp[i][j] = 1;
      else {
        for (let p = 0; p <= Math.min(j, i - 1); p++) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - p]) % 1000000007;
        }
      }
    }
  }
  return dp[n][k];  
};
// @lc code=end

