/*
 * @lc app=leetcode id=583 lang=javascript
 *
 * [583] Delete Operation for Two Strings
 */

/**
 * tags: #dynamic-programming, #two-string-grid
 * {@link minDistance|./72.edit-distance.js}
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length, n = word2.length;

  let dp = Array.from(Array(m + 1), () => Array(n + 1));

  // init boundaries
  // for (let i = 0; i <= m; i++) {
  //   dp[i][0] = i;
  // }
  // for (let j = 0; j <= n; j++) {
  //   dp[0][j] = j;
  // }

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i == 0 || j == 0)
        dp[i][j] = i + j;
      else if (word1.charAt(i - 1) == word2.charAt(j - 1))
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};
// @lc code=end


/**
 * - Time complexity: O(m * n).
 * - Space complexity: O(m * n).
 */