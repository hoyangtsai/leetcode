/*
 * @lc app=leetcode id=2360 lang=javascript
 *
 * [2360] Longest Cycle in a Graph
 */

/**
 * tags: #directed-graph
 */

// @lc code=start
/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  let ans = -1;

  function dfs(node, edges, dist, visit) {
    visit[node] = true;
    let neighbor = edges[node];

    if (neighbor != -1 && !visit[neighbor]) {
      dist.set(neighbor, dist.get(node) + 1);
      dfs(neighbor, edges, dist, visit);
    } else if (neighbor != -1 && dist.has(neighbor)) {
      ans = Math.max(ans, dist.get(node) - dist.get(neighbor) + 1);
    }
  }

  let n = edges.length;
  let visit = new Array(n);
  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      const dist = new Map();
      dist.set(i, 1);
      dfs(i, edges, dist, visit);
    }
  }

  return ans;
};
// @lc code=end

