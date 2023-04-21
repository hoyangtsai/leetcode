/*
 * @lc app=leetcode id=2316 lang=javascript
 *
 * [2316] Count Unreachable Pairs of Nodes in an Undirected Graph
 */

/**
 * tags: #undirected-graph, #connect-node
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  function dfs(node, adj, visit) {
    let count = 1;
    visit[node] = true;
    for (const neighbor of adj[node]) {
      if (!visit[neighbor]) {
        count += dfs(neighbor, adj, visit);
      }
    }
    return count;
  }

  let adj = Array.from(new Array(n), () => []);
  for (const [x, y] of edges) {
    adj[x].push(y);
    adj[y].push(x);
  }

  let numberOfPairs = 0;
  let sizeOfComponent = 0;
  let remainingNodes = n;
  let visit = Array.from(new Array(n));
  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      sizeOfComponent = dfs(i, adj, visit);
      numberOfPairs += sizeOfComponent * (remainingNodes - sizeOfComponent);
      remainingNodes -= sizeOfComponent;
    }
  }

  return numberOfPairs;
};
// @lc code=end

