/*
 * @lc app=leetcode id=934 lang=javascript
 *
 * [934] Shortest Bridge
 */

/**
 * tags: #matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const n = grid.length;
  let firstX = -1, firstY = -1;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        firstX = i;
        firstY = j;
        break;
      }
    }
  }

  // Add all land cells of island A to bfsQueue.
  let bfsQueue = [];
  
  function dfs(grid, x, y, n) {
    grid[x][y] = 2;
    bfsQueue.push([x, y]);
    for (const pair of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
      let curX = pair[0], curY = pair[1];
      if (0 <= curX && curX < n && 0 <= curY && curY < n && grid[curX][curY] == 1) {
        dfs(grid, curX, curY, n);
      }
    }
  }

  dfs(grid, firstX, firstY, n);

  let distance = 0;
  while (bfsQueue.length > 0) {
    let newBfs = [];
    for (const pair of bfsQueue) {
      let x = pair[0], y = pair[1];

      for (const nextPair of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
        let curX = nextPair[0], curY = nextPair[1];
        if (0 <= curX && curX < n && 0 <= curY && curY < n) {
          if (grid[curX][curY] == 1) {
            return distance;
          } else if (grid[curX][curY] == 0) {
            newBfs.push(nextPair);
            grid[curX][curY] = -1;
          }
        }
      }
    }

    // Once we finish one round without finding land cells of island B, we will
    // start the next round on all water cells that are 1 cell further away from
    // island A and increment the distance by 1.
    bfsQueue = newBfs;
    distance++;
  }

  return distance;
};
// @lc code=end


/**
 * - Time complexity: O(n^2).
 * - Space complexity: O(n^2).
 */