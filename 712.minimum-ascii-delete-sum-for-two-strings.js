/*
 * @lc app=leetcode id=712 lang=javascript
 *
 * [712] Minimum ASCII Delete Sum for Two Strings
 */

/**
 * tags: #dynamic-programming, #two-string-grid
 * {@link longestCommonSubsequence|1143.longest-common-subsequence.js}
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const m = s1.length, n = s2.length;

  let dp = Array.from(Array(m + 1).fill(0), () => Array(n + 1).fill(0));

  // init boundaries
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1));
      }
    }
  }

  return dp[m][n];
};
// @lc code=end


/**
 * Time complexity: O(M * N).
 * Space complexity: O(M * N).
 */

minimumDeleteSum("sea", "eat");