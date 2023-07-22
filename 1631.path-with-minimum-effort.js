/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

/**
 * tags: #matrix, #dijkstra-algorithm, #square-traverse, #direction-grid
 * {@link 64.minimum-path-sum/dijkstra-algorithm.js}
 * {@link 743.network-delay-time.js}
 * {@link 787.cheapest-flights-within-k-stops/dijkstra-algorithm.js}
 */

const { PriorityQueue } = require('@datastructures-js/priority-queue')
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

  function isValidCell(x, y) {
    return x >= 0 && x < row && y >= 0 && y < col;
  }

  let pq = new PriorityQueue({ compare: (a, b) => a.difference - b.difference });
  pq.enqueue(new Cell(0, 0, differenceMatrix[0][0]));

  while(!pq.isEmpty()) {
    const curr = pq.dequeue();

    if (curr.x == row - 1 && curr.y == col - 1) return curr.difference;

    visited[curr.x][curr.y] = true;

    for (const [dx, dy] of dirs) {
      const nextX = curr.x + dx;
      const nextY = curr.y + dy;

      if (isValidCell(nextX, nextY) && !visited[nextX][nextY]) {
        const currDiff = Math.abs(heights[nextX][nextY] - heights[curr.x][curr.y]);
        const maxDiff = Math.max(currDiff, differenceMatrix[curr.x][curr.y]);

        if (differenceMatrix[nextX][nextY] > maxDiff) {
          differenceMatrix[nextX][nextY] = maxDiff;
          pq.enqueue(new Cell(nextX, nextY, maxDiff));
        }
      }
    }
  }

  return differenceMatrix[row - 1][col - 1];
};
// @lc code=end


/**
 * - Time complexity: O(m * n * log(m * n))
 * - Space complexity: O(m * n), we use arrays edgeList, parent and size of size m * n
 */
