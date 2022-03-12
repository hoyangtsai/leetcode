/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

/**
 * tags: #dynamic-programming, #two-string-grid, #top-100-liked-questions
 * {@link 712.minimum-ascii-delete-sum-for-two-strings.js}
 * {@link 1143.longest-common-subsequence.js}
 * {@link 583.delete-operation-for-two-strings.js}
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // if one of the strings is empty
  if (m * n == 0) return m + n;

  let dp = Array.from(Array(m + 1), () => Array(n + 1));

  // init boundaries
  // for (let i = 0; i <= m; i++) {
  //   dp[i][0] = i;
  // }
  // for (let j = 0; j <= n; j++) {
  //   dp[0][j] = j;
  // }

  // DP compute 
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // let left = dp[i - 1][j] + 1;
      // let top = dp[i][j - 1] + 1;
      // let leftTop = dp[i - 1][j - 1];
      // if (word1.charAt(i - 1) != word2.charAt(j - 1)) {
      //   leftTop += 1;
      // }
      // dp[i][j] = Math.min(left, top, leftTop);
      
      if (i == 0 || j == 0)
        dp[i][j] = i + j;
      else if (word1.charAt(i - 1) == word2.charAt(j - 1))
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m][n];
};
// @lc code=end


/**
 * - Time complexity: O(mn).
 * - Space complexity: O(mm).
 */
