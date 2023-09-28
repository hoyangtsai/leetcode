/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

/**
 * tags: #matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const m = mat.length; // row
  const n = mat[0].length; // col

  let indexes = Array(k);
  let nextInsertIndex = 0;

  for (let c = 0; c < n && nextInsertIndex < k; c++) {
    for (let r = 0; r < m && nextInsertIndex < k; r++) {
      // If this is the first 0 in the current row.
      if (mat[r][c] == 0 && (c == 0 || mat[r][c - 1] == 1)) {
        indexes[nextInsertIndex] = r;
        nextInsertIndex++;
      }
    }
  }

  // If there aren't enough, it's because some of the first k weakest rows are entirely 1's. 
  // We need to include the ones with the lowest indexes until we have at least k.
  for (let r = 0; nextInsertIndex < k ; r++) {
    /// If index i in the last column is 1, this was a full row and
    // therefore couldn't have been included in the output yet.
    if (mat[r][n - 1] == 1) {
      indexes[nextInsertIndex] = r;
      nextInsertIndex++;
    }
  }

  return indexes;
};
// @lc code=end


/**
 * - Time complexity: O(m * n).
 *   We are visiting each of the first m * n - 1 cells at most once, and the last column of m cells at most twice.
 *   In the big-O notation O(m * (n - 1) + 2 * m) = O(m * n).   
 * 
 * - Space complexity: O(1). 
 */