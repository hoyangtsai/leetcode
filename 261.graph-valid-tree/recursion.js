/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 */

/**
 * tags: #depth-first-search, #validate-tree
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

  function dfs(node, parent) {
    if (seen.has(node)) return false;

    seen.add(node);

    for (const neighbor of adjacencyList[node]) {
      if (parent != neighbor) {
        let result = dfs(neighbor, node);
        if (!result) return false;
      }
    }
    return true;
  }
  
  for (const edge of edges) {
    adjacencyList[edge[0]] = [...adjacencyList[edge[0]], edge[1]];
    adjacencyList[edge[1]] = [...adjacencyList[edge[1]], edge[0]];
  }

  // We return true iff no cycles were detected,
  // AND the entire graph has been reached.
  return dfs(0, -1) && seen.size == n;   
};
// @lc code=end

