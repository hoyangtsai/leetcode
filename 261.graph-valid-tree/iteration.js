/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 */

/**
 * tags: #breadth-first-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const adjacencyList = Array(n).fill([]);

  for (const edge of edges) {
    adjacencyList[edge[0]] = [...adjacencyList[edge[0]], edge[1]];
    adjacencyList[edge[1]] = [...adjacencyList[edge[1]], edge[0]];
  }
  
  let parent = new Map();
  parent.set(0, -1);
  let stack = [0];

  while (stack.length) {
    const node = stack.pop();
    for (const neighbor of adjacencyList[node]) {
      if (parent.get(node) == neighbor) {
        continue;
      }
      if (parent.has(neighbor)) {
        return false;
      }
      stack.push(neighbor);
      parent.set(neighbor, node);
    }
  }

  return parent.size == n;   
};
// @lc code=end


/**
 * Let E be the number of edges, and N be the number of nodes.
 * 
 * - Time complexity: O(N + E).
 * - Space complexity: O(N + E).
 */