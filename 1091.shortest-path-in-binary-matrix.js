/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 */

/**
 * tags: #matrix, #breadth-first-search
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  // Firstly, we need to check that the start and target cells are open.
  if (grid[0][0] != 0 || grid[grid.length - 1][grid[0].length - 1] != 0) {
    return -1;
  }

  const dirs =[[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  // Set up the BFS.
  let queue = [[0, 0]];
  grid[0][0] = 1;

  // Carry out the BFS
  while (queue.length > 0) {
    let cell = queue.shift();
    let row = cell[0];
    let col = cell[1];
    let distance = grid[row][col];
    if (row == grid.length - 1 && col == grid[0].length - 1) {
      return distance;
    }

    for (const [neighborRow, neighborCol] of getNeighbors(row, col, grid)) {
      queue.push([neighborRow, neighborCol]);
      grid[neighborRow][neighborCol] = distance + 1;
    }
  }

  // The target was unreachable.
  return -1;

  function getNeighbors(row, col, grid) {
    let neighbors = [];

    for (const [dx, dy] of dirs) {
      let newRow = row + dx;
      let newCol = col + dy;
      if (newRow < 0 || newCol < 0 
        || newRow >= grid.length || newCol >= grid[0].length
        || grid[newRow][newCol] != 0) {
        continue;
      }
      neighbors.push([newRow, newCol]);
    }
    return neighbors;
  }
};
// @lc code=end

