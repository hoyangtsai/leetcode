/*
 * @lc app=leetcode id=1260 lang=javascript
 *
 * [1260] Shift 2D Grid
 */

/**
 * tags: #matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  let row = grid.length, col = grid[0].length;
  let dimension = row * col;
  k %= dimension;
  let begin = dimension - k;
  let res = [];
  for (let i = begin; i < begin + dimension; i++) {
    const j = i % (row * col);
    const r = parseInt(j / col), c = parseInt(j % col);
    if ((i - begin) % col == 0) res.push([]);
    res[res.length - 1].push(grid[r][c]);
  }
  return res;
};
// @lc code=end


/**
 * - Time complexity: O(m * n)
 * - Space complexity: O(m * n)
 */