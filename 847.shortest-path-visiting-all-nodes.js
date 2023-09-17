/*
 * @lc app=leetcode id=847 lang=javascript
 *
 * [847] Shortest Path Visiting All Nodes
 */

/**
 * tags: #graph, #node-traverse, #bitwise-operation
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  if (graph.length == 1) return 0;

  const n = graph.length;
  let endingMask = (1 << n) - 1;
  let seen = Array.from(Array(n).fill(false), () => Array(endingMask).fill(false));
  let queue = [];

  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i]);
    seen[i][1 << i] = true;
  }

  let steps = 0;
  while (queue.length > 0) {
    let nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const currentPair = queue[i];

      const node = currentPair[0];
      const mask = currentPair[1];
      for (const neighbor of graph[node]) {
        const nextMask = mask | (1 << neighbor);
        if (nextMask == endingMask) {
          return 1 + steps;
        }
        
        if (!seen[neighbor][nextMask]) {
          seen[neighbor][nextMask] = true;
          nextQueue.push([neighbor, nextMask]);
        }
      }
    }
    steps++;
    queue = nextQueue;
  }

  return -1;
};
// @lc code=end


/**
 * - Time complexity: O(2^N * N^2)
 * - Space complexity: O(2^N * N)
 */