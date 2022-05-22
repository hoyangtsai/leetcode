/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

/**
 * tags: #dynamic-programming
 * {@link 647.palindromic-substrings/dynamic-programming.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;

  if (n < 2) return s;

  let dp = Array.from(Array(n).fill(false), () => Array(n).fill(false));

  let ans = '';

  // base case for one character
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    ans = s[i];
  }

  // Base case: double letter substrings
  for (let i = 0; i < n - 1; ++i) {
    dp[i][i + 1] = (s.charAt(i) == s.charAt(i + 1));
    if (dp[i][i + 1]) {
      ans = s.substring(i, i + 2);
    }
  }

  // All other cases: substrings of length 3 to n
  for (let len = 3; len <= n; ++len) {
    for (let i = 0, j = i + len - 1; j < n; ++i, ++j) {
      dp[i][j] = dp[i + 1][j - 1] && (s.charAt(i) == s.charAt(j));
      if (dp[i][j] && ans.length < (j - i + 1)) {
        ans = s.substring(i, j + 1);
      }
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N^2).
 * - Space complexity: O(N^2).
 */
