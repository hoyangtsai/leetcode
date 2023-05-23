/*
 * @lc app=leetcode id=1557 lang=javascript
 *
 * [1557] Minimum Number of Vertices to Reach All Nodes
 */

/**
 * tags: #graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  // List to signify if the vertex has an incoming edge or not.
  let isIncomingEdgeExists = Array(n).fill(false);
  for (const edge of edges) {
    isIncomingEdgeExists[edge[1]] = true;
  }

  let requiredNodes = [];
  for (let i = 0; i < n; i++) {
    // Store all the nodes that don't have an incoming edge.
    if (!isIncomingEdgeExists[i]) {
      requiredNodes.push(i);
    }
  }

  return requiredNodes;
};
// @lc code=end


/**
 * - Time complexity: O(N + E).
 * - Space complexity: O(N).
 */