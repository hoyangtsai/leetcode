/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

/**
 * tags: #matrix, #binary-search, #depth-first-search
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

  function canReachEnd(x, y, visited, mid) {
    if (x == row - 1 && y == col - 1) {
      return true;
    }

    visited[x][y] = true; // mark as visited

    for (let [dx, dy] of dirs) {
      let nextX = x + dx;
      let nextY = y + dy;
      if (isValidCell(nextX, nextY) && !visited[nextX][nextY]) {
        let currentDifference = Math.abs(heights[nextX][nextY] - heights[x][y]);
        if (currentDifference <= mid) {
          if (canReachEnd(nextX, nextY, visited, mid))
            return true;
        }
      }
    }
    return false;
  }

  function isValidCell(x, y) {
    return x >= 0 && x <= row - 1 && y >= 0 && y <= col - 1;
  }

  function dfs(mid) {
    const visited = Array.from(new Array(row).fill(false),
      () => new Array(col).fill(false));
    return canReachEnd(0, 0, visited, mid);
  }

  let left = 0;
  let right = Math.pow(10, 6); // based on constraint
  let minEfforts = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (dfs(mid)) {
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
 * - Time complexity: O(m * n).
 * - Space complexity: O(m * n).
 */