/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

/**
 * com: #google, #amazon
 * tags: #dynamic-programming, #matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  let dist = new Array(rows).fill(Infinity);
  for (let i = 0; i < rows; i++) {
    dist[i] = new Array(cols).fill(Infinity);
  }

  // First pass: check for left and top
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] == 0) {
        dist[i][j] = 0;
      } else {
        if (i > 0)
          dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
        if (j > 0)
          dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }

  //Second pass: check for bottom and right
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i < rows - 1)
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      if (j < cols - 1)
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
    }
  }

  return dist;
};
// @lc code=end

/**
 * Time complexity: O(r * n).
 * Space complexity: O(1).
 *    - No extra space is required other than the space used to store the output (dist), and the output does not count towards the space complexity.
 */