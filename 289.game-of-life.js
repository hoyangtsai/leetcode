/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

/**
 * tags: #matrix
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // Neighbors array to find 8 neighboring cells for a given cell
  const neighbors = [ 0, 1, - 1];

  let rows = board.length, cols = board[0].length;

  // Iterate through board cell by cell.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // For each cell count the number of live neighbors.
      let liveNeighbors = 0;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

          if (!(neighbors[i] == 0 && neighbors[j] == 0)) {
            const r = (row + neighbors[i]);
            const c = (col + neighbors[j]);

            // Check the validity of the neighboring cell.
            // and whether it was originally a live cell.
            if ((r < rows && r >= 0) && (c < cols && c >= 0) && (Math.abs(board[r][c]) == 1)) {
              liveNeighbors += 1;
            }
          }
        }
      }

      // Rule 1 or Rule 3
      if ((board[row][col] == 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
        // -1 signifies the cell is now dead but originally was live.
        board[row][col] = -1;
      }
      // Rule 4
      if (board[row][col] == 0 && liveNeighbors == 3) {
        // 2 signifies the cell is now live but was originally dead.
        board[row][col] = 2;
      }
    }
  }

  // Get the final representation for the newly updated board.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] > 0) {
        board[row][col] = 1;
      } else {
        board[row][col] = 0;
      }
    }
  }
};
// @lc code=end


/**
 * - Time complexity: O(M * N)
 * - Space complexity: O(1)
 */