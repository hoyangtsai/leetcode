/*
 * @lc app=leetcode id=311 lang=javascript
 *
 * [311] Sparse Matrix Multiplication
 */

// @lc code=start
/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
  let n = mat1.length;
  let k = mat1[0].length;
  let m = mat2[0].length;

  // Product matrix will have 'n x m' size.
  let ans = Array.from(Array(n).fill(0), () => Array(m).fill(0));

  for (let rowIndex = 0; rowIndex < n; ++rowIndex) {
    for (let elementIndex = 0; elementIndex < k; ++elementIndex) {
      // If current element of mat1 is non-zero then iterate over all columns of mat2.
      if (mat1[rowIndex][elementIndex] != 0)  {
        for (let colIndex = 0; colIndex < m; ++colIndex) {
          ans[rowIndex][colIndex] += mat1[rowIndex][elementIndex] * mat2[elementIndex][colIndex];
        }
      }
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(m * k * n).
 * - Space complexity: O(1).
 */