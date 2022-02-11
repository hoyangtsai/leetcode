/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const adjacencyList = Array(n).fill([]);

  for (const e of edges) {
    adjacencyList[e[0]] = [...adjacencyList[e[0]], e[1]];
    adjacencyList[e[1]] = [...adjacencyList[e[1]], e[0]];
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

