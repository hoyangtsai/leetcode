/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

/**
 * tags: #matrix, #dijkstra-algorithm
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // cannot go back only moving forward
  const dirs = [[1, 0], [0, 1]];

  let matrix = Array.from(new Array(m).fill(Infinity), () => new Array(n).fill(Infinity));
  matrix[0][0] = grid[0][0];

  let visited = Array.from(new Array(m).fill(false), () => new Array(n).fill(false));

  function Cell(x, y, sum) {
    this.x = x;
    this.y = y;
    this.sum = sum;
  }

  function shortestFirst(a, b) {
    return a.sum - b.sum;
  }

  function isValidCell(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  let queue = [];
  queue.push(new Cell(0, 0, grid[0][0]));

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.x == m - 1 && curr.y == n - 1) return curr.sum;

    visited[curr.x][curr.y] = true;

    for (const [dx, dy] of dirs) {
      const nextX = curr.x + dx;
      const nextY = curr.y + dy;

      if (isValidCell(nextX, nextY) && !visited[nextX][nextY]) {
        const nextSum = grid[nextX][nextY] + matrix[curr.x][curr.y];

        if (nextSum < matrix[nextX][nextY]) {
          matrix[nextX][nextY] = nextSum;
          queue.push(new Cell(nextX, nextY, nextSum));
        }
      } 
    }
    queue.sort(shortestFirst);
  }

  return matrix[m - 1][n - 1];
};
// @lc code=end


// minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])

const min = minPathSum([[1, 2, 5], [3, 2, 1]])
console.log(min);