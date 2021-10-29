/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

// @google, @houzz
// #matrix, #binary-search, #breadth-first-search

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const row = heights.length;
  const col = heights[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function canReachEnd(k) {
    const visited = new Array(row).fill(false);
    for (const r in visited) {
      visited[r] = new Array(col).fill(false);
    }

    let queue = [];
    queue.push([0, 0]);
    visited[0][0] = true;

    while (queue.length) {
      let curr = queue.shift();
      if (curr[0] == row - 1 && curr[1] == col - 1) {
        return true;
      }
      for (let [dx, dy] of dirs) {
        let nextX = curr[0] + dx;
        let nextY = curr[1] + dy;
        if (isValidCell(nextX, nextY, row, col) && !visited[nextX][nextY]) {
          let currentDifference = Math.abs(heights[nextX][nextY] - heights[curr[0]][curr[1]]);
          if (currentDifference <= k) {
            visited[nextX][nextY] = true;
            queue.push([nextX, nextY]);
          }
        }
      }
    }
    return false;
  }

  function isValidCell(x, y) {
    return x >= 0 && x <= row - 1 && y >= 0 && y <= col - 1;
  }

  let left = 0;
  let right = Math.pow(10, 6); // based on constraint
  let minEfforts = right;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    
    if (canReachEnd(mid)) {
      minEfforts = Math.min(minEfforts, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return minEfforts;
};
// @lc code=end

/**
 * Binary search using BFS
 * 
 * - Time complexity: O(m * n).
 *   We do a binary search to calculate the mid values and 
 *   then do breadth-first search on the matrix for each of those values.
 *   Binary Search: to perform Binary Search on number in range (0...10^6). the time taken would be O(log 10^6).
 *   This gives us total time complexity as O(log 10^6 * (m * n)) which is equivalent to O(m * n).
 * 
 * - Space complexity: O(m * n), as we use a queue and visited array of size m * n.
 */