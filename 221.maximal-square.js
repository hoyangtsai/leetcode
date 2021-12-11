/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

/**
 * 
 * tags: #matrix, #dynamic-programming
 * {@link maximalRectangle|./85.maximal-rectangle.js} 
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;

  let dp = Array.from(Array(rows + 1).fill(0), () => Array(cols + 1).fill(0));
  let maxsqlen = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      if (matrix[i - 1][j - 1] == '1') {
        dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[i][j]);
      }
    }
  }

  return maxsqlen * maxsqlen;
};
// @lc code=end

