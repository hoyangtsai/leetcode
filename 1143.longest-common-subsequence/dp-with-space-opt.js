/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

/**
 * tags: #dynamic-programming, #string-subsequence, #two-string-calculation
 * {@link 712.minimum-ascii-delete-sum-for-two-strings.js}
 * {@link 1035.uncrossed-lines.js}
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

  // Iterate through each column, starting from the last one.
  for (let col = m - 1; col >= 0; col--) {
    // Create a new array to represent the current column.
    let current = Array(m + 1).fill(0);
    for (let row = n - 1; row >= 0; row--) {
      if (text1.charAt(col) == text2.charAt(row)) {
        current[row] = 1 + previous[row + 1];
      } else {
        current[row] = Math.max(previous[row], current[row + 1]);
      }
    }
    // The current column becomes the previous one.
    [previous, current] = [current, previous];
  }

  return previous[0];
};
// @lc code=end


/**
 * Time complexity: O(M * N).
 * Space complexity: O(min(M, N)). 
 */

const res = longestCommonSubsequence("actgattag", "gtgtgatcg");
console.log('res =>', res);