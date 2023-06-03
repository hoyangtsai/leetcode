/*
 * @lc app=leetcode id=2101 lang=javascript
 *
 * [2101] Detonate the Maximum Bombs
 */

/**
 * tags: #graph
 */

// @lc code=start
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  let graph = new Map();
  const n = bombs.length;

  // Build the graph
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) continue;

      let xi = bombs[i][0], yi = bombs[i][1], ri = bombs[i][2];
      let xj = bombs[j][0], yj = bombs[j][1];

      // Create a path from node i to node j, if bomb i detonates bomb j.
      // two point distance = (x1 - x2)^2 + (y1 - y2)^2
      if (ri * ri >= (xi - xj) * (xi - xj) + (yi - yj) * (yi - yj)) {
        graph.set(i, [...(graph.get(i) || []), j]);
      }
    }
  }

  // DFS to get the number of nodes reachable from a given node cur
  function dfs(cur, visited, graph) {
    visited.add(cur);
    let count = 1;
    for (const neib of graph.get(cur) || []) {
      if (!visited.has(neib)) {
        count += dfs(neib, visited, graph);
      }
    }
    return count;
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    let count = dfs(i, new Set(), graph);
    answer = Math.max(answer, count);
  }

  return answer;
};
// @lc code=end


/**
 * - Time complexity: O(n^3).
 * - Space complexity: O(n^2).
 */