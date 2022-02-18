/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 */

/**
 * tags: #graph, #breadth-first-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  if (edges.length != n - 1) return false;
  
  const adjacencyList = Array(n).fill([]);

  for (const edge of edges) {
    adjacencyList[edge[0]] = [...adjacencyList[edge[0]], edge[1]];
    adjacencyList[edge[1]] = [...adjacencyList[edge[1]], edge[0]];
  }
  
  let stack = [0];
  let seen = new Set();
  seen.add(0);

  while (stack.length) {
    const node = stack.pop();
    for (const neighbor of adjacencyList[node]) {
      if (seen.has(neighbor)) continue;
      seen.add(neighbor);
      stack.push(neighbor);
    }
  }

  return seen.size == n;   
};
// @lc code=end


/**
 * Let E be the number of edges, and N be the number of nodes.
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */