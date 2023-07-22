/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

/**
 * tags: #breadth-first-search, #matrix, #square-traverse, #direction-grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {  
  const m = grid.length;
  const n = grid[0].length;

  let freshOranges = 0;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) freshOranges++;
    }
  }

  // Mark the round / level, _i.e_ the ticker of timestamp
  queue.push([-1, -1]);

  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  function isValidCell(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }
  
  let minutesElapsed = -1;
  
  while (queue.length > 0) {
    let [r, c] = queue.shift();
    if (r == -1) {
      minutesElapsed++;
      // to avoid the endless loop
      if (queue.length > 0) {
        queue.push([-1, -1]);
      }
    } else {
      for (const [dx, dy] of dirs) {
        let nr = r + dx;
        let nc = c + dy;

        if (isValidCell(nr, nc) && grid[nr][nc] == 1) {
          // this orange would be contaminated
          grid[nr][nc] = 2;
          freshOranges--;
          queue.push([nr, nc]);
        }
      }
    }
  }

  // return elapsed minutes if no fresh orange left
  return freshOranges == 0 ? minutesElapsed : -1;
};
// @lc code=end


/**
 * - Time complexity: O(N), where N is the size of the grid.
 * - Space complexity: O(N), where N is the size of the grid.
 */