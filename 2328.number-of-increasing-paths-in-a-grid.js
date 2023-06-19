/*
 * @lc app=leetcode id=2328 lang=javascript
 *
 * [2328] Number of Increasing Paths in a Grid
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const mod = 1_000_000_007;
  
  const m = grid.length, n = grid[0].length;

  function dfs(gird, i, j) {
    // If dp[i][j] is non-zero, it means we have got the value of dfs(i, j),
    // so just return dp[i][j].
    if (dp[i][j] != 0) return dp[i][j];

    // Otherwise, set answer = 1, the path made of grid[i][j] itself.
    let answer = 1;

    // Check its four neighbor cells, if a neighbor cell grid[prevI][prevJ] has a
    // smaller value, we move to this cell and solve the subproblem: dfs(prevI, prevJ).
    for (const d of dirs) {
      let prevI = i + d[0], prevJ = j + d[1];
      if (0 <= prevI && prevI < grid.length && 0 <= prevJ && 
        prevJ < grid[0].length && grid[prevI][prevJ] < grid[i][j]) {
        answer += dfs(grid, prevI, prevJ);
        answer %= mod;
      }
    }

    // Update dp[i][j], so that we don't recalculate its value later.
    dp[i][j] = answer;
    return answer;
  }

  let dp = Array.from(Array(m).fill(0), () => Array(n).fill(0));

  // Iterate over all cells grid[i][j] and sum over dfs(i, j).
  let answer = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      answer = (answer + dfs(grid, i, j)) % mod;
    }
  }

  return answer;
};
// @lc code=end

