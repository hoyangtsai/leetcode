/*
 * @lc app=leetcode id=348 lang=javascript
 *
 * [348] Design Tic-Tac-Toe
 */

/**
 * tags: #design
 */

// @lc code=start
/**
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.rows = Array(n).fill(0);
  this.cols = Array(n).fill(0);
  this.diagonal = 0;
  this.antiDiagonal = 0;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  let currentPlayer = (player == 1) ? 1 : -1;
  // update currentPlayer in rows and cols arrays
  this.rows[row] += currentPlayer;
  this.cols[col] += currentPlayer;
  // update diagonal
  if (row == col) {
    this.diagonal += currentPlayer;
  }
  //update anti diagonal
  if (col == (this.cols.length - row - 1)) {
    this.antiDiagonal += currentPlayer;
  }

  let n = this.rows.length;
  // check if the current player wins
  if (Math.abs(this.rows[row]) == n ||
      Math.abs(this.cols[col]) == n ||
      Math.abs(this.diagonal) == n ||
      Math.abs(this.antiDiagonal) == n) {
    return player;
  }
  // No one wins
  return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
// @lc code=end


/**
 * - Time complexity: O(1).
 * - Space complexity: O(n).
 */