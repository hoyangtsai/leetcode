/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

/**
 * tags: #graph, #topological-sort
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  // edge cases
  if (n < 2) {
    let centroids = [];
    for (let i = 0; i < n; i++)
      centroids.push(i);
    return centroids;
  }

  // Build the graph with the adjacency list
  let neighbors = Array(n).fill([]);
  for (const [start, end] of edges) {
    neighbors[start] = [...neighbors[start], end];
    neighbors[end] = [...neighbors[end], start];
  }

  // Initialize the first layer of leaves
  let leaves = [];
  neighbors.forEach((nodes, i) => {
    if (nodes.length === 1) {
      leaves.push(i);
    }
  })

  // Trim the leaves until reaching the centroids
  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes = remainingNodes - leaves.length;
    let newLeaves = [];

    // remove the current leaves along with the edges
    for (const leaf of leaves) {
      // the only neighbor left for the leaf node
      let neighbor = neighbors[leaf].pop();
      // remove the edge along with the leaf node
      neighbors[neighbor].splice(neighbors[neighbor].indexOf(leaf), 1);
      if (neighbors[neighbor].length === 1) {
        newLeaves.push(neighbor);
      }
    }

    // prepare for the next round
    leaves = newLeaves;
  }

  // The remaining nodes are the centroids of the graph
  return leaves;
};
// @lc code=end


/**
 * - Time complexity: O(|V|)
 * - Space complexity: O(|V|)
 */