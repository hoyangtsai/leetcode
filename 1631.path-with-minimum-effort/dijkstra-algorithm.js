/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const row = heights.length;
  const col = heights[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let differenceMatrix = Array.from(new Array(row).fill(Infinity), () => new Array(col).fill(Infinity));
  differenceMatrix[0][0] = 0;

  let visited = Array.from(new Array(row).fill(false), () => new Array(col).fill(false));

  function Cell(x, y, difference) {
    this.x = x;
    this.y = y;
    this.difference = difference;
  }

  function shortestFirst(a, b) {
    return a.difference - b.difference;
  }

  let queue = [];
  queue.push(new Cell(0, 0, differenceMatrix[0][0]));

  function isValidCell(x, y) {
    return x >= 0 && x < row && y >= 0 && y < col;
  }

  while(queue.length > 0) {
    const curr = queue.shift();
    visited[curr.x][curr.y] = true;

    if (curr.x == row - 1 && curr.y == col - 1) return curr.difference;

    for (const [dx, dy] of dirs) {
      const nextX = curr.x + dx;
      const nextY = curr.y + dy;
      if (isValidCell(nextX, nextY) && !visited[nextX][nextY]) {
        const currDiff = Math.abs(heights[nextX][nextY] - heights[curr.x][curr.y]);
        const maxDiff = Math.max(currDiff, differenceMatrix[curr.x][curr.y]);
        if (differenceMatrix[nextX][nextY] > maxDiff) {
          differenceMatrix[nextX][nextY] = maxDiff;
          queue = queue.concat(new Cell(nextX, nextY, maxDiff)).sort(shortestFirst);
        }
      }
    }
  }

  return differenceMatrix[row - 1][col - 1];
};
// @lc code=end

/**
 * dijkstra algorithm
 * 
 * - Time complexity: O(m * n(log(m * n)))
 * - Space complexity: O(m * n), we use arrays edgeList, parent and size of size m * n.
 */