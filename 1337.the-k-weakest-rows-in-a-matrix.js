/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
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

  // paris = [[soldier count, index]]
  let pairs = Array.from(Array(m), () => Array(n));
  for (let i = 0; i < m; i++) {
    let strength = 0;
    for (let j = 0; j < n; j++) {
      // soldiers always in front of civilians
      if (mat[i][j] == 0) break;
      strength++;
    }
    pairs[i][0] = strength;
    pairs[i][1] = i;
  }

  // sorting ascending by solider count
  // less strength means weaker
  pairs.sort((a, b) => {
    // if same strength sort by index
    if (a[0] == b[0]) return a[1] - b[1];
    return a[0] - b[0];
  })

  let indices = [];
  for (let i = 0; i < k; i++) {
    indices.push(pairs[i][1]);
  }
  return indices;
};
// @lc code=end

