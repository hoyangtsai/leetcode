/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

/**
 * tags: #matrix, #depth-first-search, #DFS
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  let cache = Array.from(new Array(m).fill(0), () => new Array(n).fill(0));

  function dfs(i, j) {
    if (cache[i][j] != 0) return cache[i][j];
    for (const [dx, dy] of dirs) {
      const x = i + dx, y = j + dy;
      if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
        cache[i][j] = Math.max(cache[i][j], dfs(x, y));
      }
    }
    return ++cache[i][j];
  }
  
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }
  
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(m * n). Each vertex/cell will be calculated once and only once, and each edge will be visited once and only once. The total time complexity is then O(V + E). V is the total number of vertices and E is the total number of edges. In our problem, O(V) = O(mn), O(E) = O(4V) = O(mn).
 * - Space complexity: O(m * n). The cache dominates the space complexity.
 */