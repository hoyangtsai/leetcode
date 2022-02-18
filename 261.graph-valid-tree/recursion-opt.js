/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 */

/**
 * tags: #graph, #depth-first-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  if (edges.length != n - 1) return false;

  let adjacencyList = Array(n).fill([]);;
  let seen = new Set();

  function dfs(node) {
    if (seen.has(node)) return;

    seen.add(node);

    for (const neighbor of adjacencyList[node]) {
      dfs(neighbor);
    }
  }
  
  for (const edge of edges) {
    adjacencyList[edge[0]] = [...adjacencyList[edge[0]], edge[1]];
    adjacencyList[edge[1]] = [...adjacencyList[edge[1]], edge[0]];
  }

  // Carry out depth first search.
  dfs(0);

  // Inspect result and return the verdict.
  return seen.size == n;   
};
// @lc code=end

