/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @amazon, @microsoft, @snapchat, @bloomberg, @facebook, @apple, @twitter, @google, @rakuten
// #array, #backtracking, #matrix, #depth-first-search

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const h = board.length;
  const w = board[0].length;

  // up, down, right, left
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 

  const search = (x, y, k) => {
    if (board[x][y] !== word[k]) {
      return false;
    }
    if (k === word.length - 1) {
      return true;
    }

    board[x][y] = '*'; // mark as visited

    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (search(i, j, k + 1)) {
          return true;
        }
      }
    }

    board[x][y] = word[k]; // reset
    return false;
  }

  for (let i = 0; i < h; i++) {    
    for (let j = 0; j < w; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end
