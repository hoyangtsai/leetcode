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
  const M = 1000000007;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (j == 0)
        dp[i][j] = 1;
      else {
        const val = (dp[i - 1][j] + M - ((j - i) >= 0 ? dp[i - 1][j - i] : 0)) % M;
        dp[i][j] = (dp[i][j - 1] + val) % M;
      }
    }
  }
  return ((dp[n][k] + M - (k > 0 ? dp[n][k - 1] : 0)) % M);  
};
// @lc code=end


/**
 * - Time complexity: O(n * k).
 * - Space complexity: O(n * k).
 */