/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @amazon, @microsoft, @bloomberg, @google, @linkedin, @facebook, @apple, @yandex
// #array, #depth-first-search, #breadth-first-search, #matrix

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const h = grid.length;
  const w = grid[0].length;
  // up, down, right, left
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  function search(grid, x, y) {
    if (x < 0 || x >= h || y < 0 || y >= w || grid[x][y] == '0') {
      return;
    }
    grid[x][y] = '0'; // mark as visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(grid, i, j);
    }
  }

  let islands = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] == '1') {
        islands += 1;
        search(grid, i, j);
      }
    }
  }

  return islands;
};
// @lc code=end

/**
 * DFS
 * Time complexity: O(M x N), where M is the number of rows and N is the number of columns.
 * Space complexity: worst case O(M x N) in case the grid map is filled with lands where DFS goes M x N steps.
 */