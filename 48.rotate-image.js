/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix.length; j++) {
        [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
      }
    }
  }

  function reflect(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
      }
    }
  }
  
  transpose(matrix);
  reflect(matrix);
};
// @lc code=end
