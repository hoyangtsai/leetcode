/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

/**
 * @Nvidia
 * tags: #hash-table
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let cols = Array.from(Array(9), () => new Set());
  let rows = Array.from(Array(9), () => new Set());
  let boxes = Array.from(Array(9), () => new Set());

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const val = board[r][c];
      if (val == '.') continue;
      
      // Check the row
      if (rows[r].has(val)) {
        return false;
      }
      rows[r].add(val);

      // Check the column√
      if (cols[c].has(val)) {
        return false;
      }
      cols[c].add(val);

      // Check the box
      let idx = parseInt(r / 3) * 3 + parseInt(c / 3);
      if (boxes[idx].has(val)) {
        return false;
      }
      boxes[idx].add(val);
    }
  }

  return true;
};
// @lc code=end

