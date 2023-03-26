/*
 * @lc app=leetcode id=323 lang=javascript
 *
 * [323] Number of Connected Components in an Undirected Graph
 */

/**
 * tags: #depth-first-search
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  function dfs(adList, visited, startNode) {
    visited[startNode] = 1;

    for (let i = 0; i < adjList[startNode].length; i++) {
      if (visited[adjList[startNode][i]] == 0) {
        dfs(adjList, visited, adjList[startNode][i]);
      }
    }
  }

  let components = 0;
  let visited = new Array(n).fill(0);

  let adjList = Array.from(Array(n));
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    adjList[edges[i][0]].push(edges[i][1]);
    adjList[edges[i][1]].push(edges[i][0]);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] == 0) {
      components++;
      dfs(adjList, visited, i);
    }
  }

  return components;
};
// @lc code=end


/**
 * Here E = Number of edges, V = Number of vertices.
 *
 * - Time complexity: O(E + V).
 * - Space complexity: O(E + V).
 */