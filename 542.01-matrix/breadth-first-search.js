/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @google, @amazon
// #array, #dynamic-programming, #breadth-first-search, #matrix

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  let q = [];
  let dist = new Array(rows).fill(Infinity);
  for (let i = 0; i < rows; i++) {
    dist[i] = new Array(cols).fill(Infinity);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] == 0) {
        dist[i][j] = 0;
        q.push([i, j]);
      }
    }
  }

  // left, right, up, dowm
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  while (q.length > 0) {
    const curr = q.shift();

    for (const [dx, dy] of dirs) {
      const m = curr[0] + dx;
      const n = curr[1] + dy;

      if (m >= 0 && m < rows && n >= 0 && n < cols) {
        if (dist[m][n] > dist[curr[0]][curr[1]] + 1) {
          dist[m][n] = dist[curr[0]][curr[1]] + 1;
          q.push([m, n]);
        }
      }
    }
  }

  return dist;
};
// @lc code=end

/**
 * Breadth first search
 * Time complexity: O(r * c).
 * Space complexity: O(r * c).
 *    - An additional O(r * c) space is required to maintain the queue.
 */