/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// #google, #amazon
// tags: #dynamic-programming, #string-subsequence

/**
 * {@link minimumDeleteSum|712.minimum-ascii-delete-sum-for-two-strings.js}
 * {@link maxUncrossedLines|1035.uncrossed-lines.js}
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length, n = text2.length;

  if (m < n) return longestCommonSubsequence(text2, text1);

  let previous = Array(n + 1).fill(0);
  let current = Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        current[j] = 1 + previous[j - 1];
      } else {
        current[j] = Math.max(previous[j], current[j - 1]);
      }
    }
    [previous, current] = [current, previous];
  }

  return previous[n];
};
// @lc code=end


/**
 * Time complexity: O(M * N).
 * Space complexity: O(min(M, N)). 
 */

const res = longestCommonSubsequence("actgattag", "gtgtgatcg");
console.log('res =>', res);