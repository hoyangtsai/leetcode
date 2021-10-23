/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// #depth-first-search

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  function dfs(M, visited, i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] == 1 && visited[j] == 0) {
        visited[j] = 1;
        dfs(M, visited, j);
      }
    }
  }

  const N = isConnected.length;
  let visited = new Array(N).fill(0);
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (visited[i] == 0) {
      dfs(isConnected, visited, i);
      count++;
    }
  }

  return count;
};
// @lc code=end


/**
 * Depth-First Search
 * 
 * - Time complexity: O(n^2). The complete matrix of size n^2 is traversed.
 * - Space complexity: O(n).
 */