/*
 * @lc app=leetcode id=2352 lang=javascript
 *
 * [2352] Equal Row and Column Pairs
 */

/**
 * tags: #matrix, #square-grid-sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const n = grid.length;

  let rowCounter = new Map();
  for (const row of grid) {
    rowCounter.set(row.toString(), (rowCounter.get(row.toString()) || 0) + 1);
  }

  let count = 0;
  for (let c = 0; c < n; c++) {
    let colArr = [];
    for (let r = 0; r < n; r++) {
      colArr[r] = grid[r][c];
    }
    count += rowCounter.get(colArr.toString()) || 0;
  }

  return count;
};
// @lc code=end


/**
 * - Time complexity: O(n^2).
 * - Space complexity: O(n^2).
 */