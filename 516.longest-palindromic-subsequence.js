/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let dp = Array.from(Array(s.length).fill(0), () => Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
};
// @lc code=end


/**
 * - Time complexity: O(n^2).
 * - Space complexity: O(n^2).
 */