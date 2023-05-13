/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

/**
 * tags: #matrix
 * {@link ./59.spiral-matrix-ii.js}
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let r = matrix.length, c = matrix[0].length;
  let direction = 1;
  let i = 0, j = -1;
  let res = [];
  while (r * c > 0) {
    for (const k of Array(c)) { // move horizontally
      j += direction;
      res.push(matrix[i][j]);
    }
    r -= 1;
    for (const k of Array(r)) { // move vertically
      i += direction;
      res.push(matrix[i][j]); 
    }
    c -= 1;
    direction *= -1; // flip
  }
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(M * N).
 * - Space complexity: O(1).
 */
