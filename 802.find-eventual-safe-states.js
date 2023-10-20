/*
 * @lc app=leetcode id=802 lang=javascript
 *
 * [802] Find Eventual Safe States
 */

/**
 * tags: #graph, #topological-sort
 * {@link 207.course-schedule/topological-sort.js}
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const n = graph.length;
  let inDegrees = Array(n).fill(0);
  let adj = Array.from({length: n}, () => []);

  for (let i = 0; i < n; i++) {
    for (const node of graph[i]) {
      adj[node].push(i);
      inDegrees[i]++;
    }
  }

  let q = [];
  // Push all the nodes with inDegree zero in the queue.
  for (let i = 0; i < n; i++) {
    if (inDegrees[i] == 0) {
      q.push(i);
    }
  }

  let safe = Array(n).fill(false);
  while (q.length > 0) {
    let node = q.shift();
    safe[node] = true;

    for (const neighbor of adj[node]) {
      // Delete the edge "node -> neighbor".
      inDegrees[neighbor]--;
      if (inDegrees[neighbor] == 0) {
        q.push(neighbor);
      }
    }
  }

  let safeNodes = [];
  for (let i = 0; i < n; i++) {
    if (safe[i]) {
      safeNodes.push(i);
    }
  }
  return safeNodes;
};
// @lc code=end


/**
 * - Time complexity: O(m + n)
 * - Space complexity: O(m + n)
 */