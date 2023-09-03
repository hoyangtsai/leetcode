/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

/**
 * tags: #dynamic-programming, #string-conjunction, #string-concatenation
 * {@link 1143.longest-common-subsequence.js}
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const n = s1.length, m = s2.length;

  if (n + m != s3.length) return false;

  // 1D dp can be used
  // let dp = Array(s2.length + 1).fill(false);
  let dp = Array.from(Array(n + 1).fill(false), () => Array(m + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = s3[i + j]
      if (i == 0 && j == 0) {
        dp[i][j] = true;
      } else if (i == 0) {
        dp[i][j] = dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1);
      } else if (j == 0) {
        dp[i][j] = dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1);
      } else {
        dp[i][j] = (dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1))
                || (dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1));
      }
    }
  }

  return dp[n][m];
};
// @lc code=end


/**
 * - Time complexity: O(n * m)
 * - Space complexity: O(n * m)
 */