/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

/**
 * tags: #square-grid, #diagonal-compute, #square-matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const n = mat.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    // Add elements from primary diagonal.
    sum += mat[i][i];
    // Add elements from secondary diagonal.
    sum += mat[n - 1 - i][i];
  }

  // If n is odd, subtract the middle element as its added twice.
  if (n % 2 != 0) {
    const mid = parseInt(n / 2);
    sum -= mat[mid][mid];
  }

  return sum;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */