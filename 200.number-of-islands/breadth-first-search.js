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

  function search(m, n) {
    return 0 <= m && m < h && 0 <= n && n < w;
  }

  let queue = [];
  let islands = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] == '1') {
        islands += 1;
        grid[i][j] = '0';
        queue.push([i, j]);
        while (queue.length > 0) {
          const [m, n] = queue.shift();
          for (const [dy, dx] of dirs) {
            const nbrM = m + dx;
            const nbrN = n + dy;
            if (search(nbrM, nbrN) && grid[nbrM][nbrN] == '1') {
              grid[nbrM][nbrN] = '0'; // mark as visited
              queue.push([nbrM, nbrN]);
            }
          }
        }
      }
    }
  }

  return islands;
};
// @lc code=end

/**
 * BFS
 * Time complexity: O(M x N), where M is the number of rows and N is the number of columns.
 * Space complexity: O(min(M, N)) because in worst case where the grid is filled with island, the size of queue can grow up to min(M, N).
 */
