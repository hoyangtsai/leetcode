/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

/**
 * tags: #breadth-first-search, #matrix
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  function isValidCell(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  let island = 0;
  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1') {
        grid[i][j] = '0';
        island += 1;
        queue.push([i, j]);

        while (queue.length > 0) {
          let [r, c] = queue.shift();
          // check its neighbor is also island
          for (const [dx, dy] of dirs) {
            let nr = r + dx;
            let nc = c + dy;
            if (isValidCell(nr, nc) && grid[nr][nc] == '1') {
              grid[nr][nc] = '0'; // mark as visited
              queue.push([nr, nc]);
            }
          }
        }
      }
    }
  }

  return island;
};
// @lc code=end

/**
 * - Time complexity: O(M x N), where M is the number of rows and N is the number of columns.
 * - Space complexity: O(min(M, N)) because in worst case where the grid is filled with island, the size of queue can grow up to min(M, N).
 */
