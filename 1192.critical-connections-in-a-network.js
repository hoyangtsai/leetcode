/*
 * @lc app=leetcode id=1192 lang=javascript
 *
 * [1192] Critical Connections in a Network
 */

/**
 * tags: #graph, #biconnected-component, #depth-first-search, #DFS
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  let graph = new Map();
  let rank = new Map();
  let connDict = new Map();

  function formGraph(n, connections) {
    // Default rank for unvisited nodes is "null"
    for (let i = 0; i < n; i++) {
      graph.set(i, []);
      rank.set(i, null);
    }

    for (const [u, v] of connections) {
      graph.set(u, graph.get(u).concat(v));
      graph.set(v, graph.get(v).concat(u));

      let sortedU = Math.min(u, v), sortedV = Math.max(u, v);
      connDict.set([sortedU, sortedV].join(), true);
    }
  }

  function dfs(node, discoveryRank) {
    // That means this node is already visited. We simply return the rank.
    if (rank.get(node) != null) {
      return rank.get(node);
    }

    // Update the rank of this node.
    rank.set(node, discoveryRank);

    // This is the max we have seen till now. So we start with this instead of INT_MAX or something.
    let minRank = discoveryRank + 1;

    for (const neighbor of graph.get(node)) {
      // Skip the parent.
      let neighRank = rank.get(neighbor);

      if (neighRank != null && neighRank == discoveryRank - 1) {
        continue;
      }

      // Recurse on the neighbor.
      let recursiveRank = dfs(neighbor, discoveryRank + 1);

      // Step 1, check if this edge needs to be discarded.
      if (recursiveRank <= discoveryRank) {
        let sortedU = Math.min(node, neighbor), sortedV = Math.max(node, neighbor);
        connDict.delete([sortedU, sortedV].join());
      }

      // Step 2, update the minRank if needed.
      minRank = Math.min(minRank, recursiveRank);
    }

    return minRank;
  }

  formGraph(n, connections);
  dfs(0, 0);

  let res = [];
  for (const conn of connDict.keys()) {
    res.push(conn.split(','));
  }

  return res;
};
// @lc code=end


/**
 * - Time complexity: O(V + E), where V represents the number of vertices and E represents the number of edges in the graph.
 * 
 * - Space complexity: O(E). The overall space complexity is a sum of the space occupied by `connDist` dictionary, `rank` dictionary, and `graph` data structure. E + V + (V + E) = O(E).
 */