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
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < parseInt((n + 1) / 2); i++) {
    for (let j = 0; j < parseInt(n / 2); j++) {
      let tmp = matrix[n - 1 - j][i]; // tmp = left bottom
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1]; // left bottom = right bottom
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i]; // right bottom = right top
      matrix[j][n - 1 - i] = matrix[i][j]; // right top = left top
      matrix[i][j] = tmp; // left top = tmp
    }
  }
};
// @lc code=end

