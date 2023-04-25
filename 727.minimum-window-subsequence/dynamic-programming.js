/*
 * @lc app=leetcode id=727 lang=javascript
 *
 * [727] Minimum Window Subsequence
 */

/**
 * tags: #dynamic-programming, #two-string-calculation
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s1, s2) {
  const n = s1.length, m = s2.length;
  // declare the DP table
  let dp = Array.from(
    // initialize dp with large values
    Array(n + 1).fill(1000000000),
    () => Array(m + 1)
  );

  // the base case of DP
  dp[0][0] = 0;
  let end = 0, length = n + 1;
  for (let i = 1; i <= n; i++) {
    // the base case of DP
    dp[i][0] = 0;
    // DP transitions
    for (let j = 1; j <= m; j++) {
      // different transitions depending on whether or not s1[i - 1] == s2[j - 1]
      dp[i][j] =
        1 + (s1.charAt(i - 1) == s2.charAt(j - 1) ?
        dp[i - 1][j - 1] :
        dp[i - 1][j]);
    }
    // update the answer
    if (dp[i][m] < length) {
      length = dp[i][m];
      end = i;
    }
  }

  return length > n ? "" : s1.substring(end - length, end);
};
// @lc code=end

/**
 * - Time complexity: O(n * m).
 * - Space complexity: O(n * m).
 */