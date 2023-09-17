/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

/**
 * tags: #dynamic-programming
 * @note not solved, try to make initial values of the dp to infinite and traverse from the beginning
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const m = heights.length;
  const n = heights[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let dp = Array.from(Array(m).fill(0), () => Array(n).fill(0));

  function isValidCell(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      console.log('i :>> ', i, ", j :>>", j);
      if (i == 0 && j != 0) { // at the horizontal edges
        dp[i][j] = Math.abs(heights[i][j] - heights[i][j - 1]);
      }
      else if (i != 0 && j == 0) { // at the vertical edges
        dp[i][j] = Math.abs(heights[i][j] - heights[i - 1][j]);
      }
      else if (i != 0 && j != 0) { // at the middle somewhere
        let diffArr = [];
        for (const [dx, dy] of dirs) {
          const nextX = i + dx;
          const nextY = j + dy;
          console.log('nextX :>> ', nextX, ", nextY :>>", nextY);
          if (isValidCell(nextX, nextY)) {
            const diff = Math.abs(heights[i][j] - heights[nextX][nextY]);
            diffArr.push(diff);
          }
        }
        console.log('diffArr :>> ', diffArr);
        dp[i][j] = Math.min(...diffArr);
      } else { // at the corner
        dp[i][j] = heights[i][j];
      }
      // console.log('dp :>> ', dp);
    }
  }

  console.log('dp :>> ', dp);
  
  return dp[0][0];
};
// @lc code=end

